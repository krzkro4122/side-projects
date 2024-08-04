#pragma once

#include <iostream>
#include <sstream>

namespace timer
{
    class Time
    {
    private:
        unsigned int timestamp;

    public:
        Time();
        Time(unsigned int timestamp);
        Time(unsigned int days, unsigned int hours, unsigned int minutes, unsigned int seconds);

        unsigned int getDays();
        unsigned int getHours();
        unsigned getMinutes();
        unsigned getSeconds();

        void setTime(unsigned int timestamp);
        void setTime(unsigned int days, unsigned int hour, unsigned int minute, unsigned int second);

        void up(unsigned int seconds);
        int down(unsigned int seconds);

        std::string toString();
        Time operator+ (const Time t);

        friend std::ostream& operator<< (std::ostream& stream, Time& time);
    };
}

