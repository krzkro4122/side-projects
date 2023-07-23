#include "stdio.h"
#include <string.h>

char *parse_arguments(char output_buffer[], int argc, char *argv[])
{
    if (argc == 2)
    {
        sprintf(output_buffer, "Supplied one argument: %s", argv[1]);
    }
    else if (argc > 2)
    { 
        sprintf(output_buffer, "List of supplied arguments:\n");    
        for (int i = 1; i < argc - 1; i++)
            sprintf(output_buffer + strlen(output_buffer), "- %s\n", argv[i]);
        sprintf(output_buffer + strlen(output_buffer), "- %s", argv[argc - 1]);
    }
    else
    {
        sprintf(output_buffer, "No arguments supplied!");
    }
}

int main(int argc, char *argv[])
{
    char output[50];
    parse_arguments(output, argc, argv);
    printf("%s", output);
    return 0;
}
