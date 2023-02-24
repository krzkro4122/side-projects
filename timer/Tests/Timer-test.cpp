#include "../Timer/Timer.h"

int main()
{
	timer::Timer tr;
	timer::Time t(0, 0, 0, 5);

	tr.countdown(t);

	return 0;
}