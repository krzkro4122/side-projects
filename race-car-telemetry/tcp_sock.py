import socket
# import time
from DATA import CAN, SketchyDNS
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.bind(('192.168.2.144', 1313))
# sock.listen(1)

BUFFER_LEN = 10


def decode(toDecode):
    address_local = 0
    data = 0
    for i in range(12):
        if i < 4:
            address_local |= (toDecode[i] << (24 - 8 * i))  # += (str(hex(toDecode[i])))[2:4]
        else:
            data |= toDecode[i] << (56 - 8*(i - 4))

    return "0x" + str(format(address_local, "04x")), hex(data)


def reading():
    print("Program started")
    try:
        while 1:
            while True:
                # print("Waiting for data")
                receivedData, address = sock.recvfrom(BUFFER_LEN * 12)

                if not receivedData:
                    break
                else:
                    for i in range(0, len(receivedData), 12):
                        val = decode(receivedData[i:i + 12])
                        CAN[val[0]].put(val[1])
                        # print(val)

            print("Disconnected from", address)
    finally:
        sock.close()


if __name__ == "__main__":
    reading()
