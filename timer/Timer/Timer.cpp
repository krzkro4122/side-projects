#include "Timer.h"
#include <chrono>
#include <thread>
#include <iostream>

namespace timer {

	int Timer::countdown(Time countStart)
	{
		std::cout << countStart << std::endl;
		while (countStart.down(1) == 0)
		{
			std::this_thread::sleep_for(std::chrono::milliseconds(1000));
			std::cout << countStart << std::endl;
		}

		std::cout << "Time's up!" << std::endl;

		return 0;
	}
}