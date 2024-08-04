#include <fcntl.h>
#include <string.h>
#include <unistd.h>

#include <netinet/in.h>

#include <sys/socket.h>
#include <sys/sendfile.h>


void main() {

    int s = socket(
        AF_INET, // Domain
        SOCK_STREAM, // Type
        0 // Protocol
    );

    struct sockaddr_in addr = {
        AF_INET, // Family
        0x901f, // 8080 port in hex in big-endian
        0 // bind to all addresses on the interface
    };

    bind(s, &addr, sizeof(addr));

    listen(
        s,
        10 // max connections at the same time
    );

    int client_fd = accept(s, 0, 0);

    char buffer[256] = {0};
    recv(client_fd, buffer, 256, 0);
    // Accepts the following request format
    // GET /file.html .....

    // We want to extract just "file.html"
    char* filename = buffer + 5;

    // change the space after "file.html" to a null string terminator
    *strchr(filename, " ") = 0;
    int opened_fd = open(filename, O_RDONLY);
    // send content from the opened file's descriptor to the client's descriptor
    sendfile(client_fd, opened_fd, 0, 256);

    close(opened_fd);
    close(client_fd);
    close(s);
}