#include <stdio.h>

int main()
{
  int counter = 0;
  const char *hello = "Hello World!\0";

  printf("[counter] value: %d, address: %p\n", counter, &counter);
  
  while (*hello)
  {
    printf("%c", *(hello++));
  }

  printf("\n");
  return 0;
}
