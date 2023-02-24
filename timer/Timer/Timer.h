#pragma once

#include "../Time/Time.h"

namespace timer {

	class Timer {
	private:
		Time time;

	public:
		int countdown(Time countStart);
	};

}