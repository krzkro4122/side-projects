#include <iostream>
#include <thread>
#include <format>
#include <stdarg.h>

void println(std::string message)
{
	std::cout << message << std::endl;
}

void println_looped(u_int16_t number_of_loops, std::string message)
{
	for (int i = 0; i < number_of_loops; i++) {
		println(std::format("{} x{}", message, i));
	}
}

struct Meta
{
	u_int16_t thread_count;
	u_int16_t number_of_loops;
};

int print_threaded(const Meta meta)
{
	std::thread threads[meta.thread_count];

	std::mutex lock;

	lock.lock();
	for (int i = 0; i < meta.thread_count; i++)
	{
		threads[i] = std::thread(
			println_looped,
			meta.number_of_loops,
			std::format("This is thread#{}", i));
	}

	lock.unlock();
	for (int i = 0; i < meta.thread_count; i++)
	{
		threads[i].join();
	}

	return 0;
}

int main()
{
	Meta meta;
	meta.thread_count = 4;
	meta.number_of_loops = 10;

	println("STARTING!");
	println(std::format("Spawning {} threads...", meta.thread_count));

	int result = print_threaded(meta);

	if (result == 0) println("SUCCESS! 🤑");
	else println("FAILURE! 💀");

	return result;
}
