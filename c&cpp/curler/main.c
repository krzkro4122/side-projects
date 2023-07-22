#include "stdio.h"

char *parse_arguments(char output[], int argc, char *argv[])
{
    if (argc == 2)
    {
        sprintf(output, "Supplied one argument: %s", argv[1]);
    }
    else if (argc > 2)
    {
        sprintf(output, "A lot of arguments, lol");
    }
    else
    {
        sprintf(output, "No arguments supplied!");
    }
}

int main(int argc, char *argv[])
{
    char output[50];
    parse_arguments(output, argc, argv);
    printf("%s\n", output);
    return 0;
}