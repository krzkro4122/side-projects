#include <iostream>
#include <iomanip>
#include <assert.h>
#include "Time.h"

namespace timer
{
    Time::Time()
        : timestamp(0)
    {
    }

    Time::Time(unsigned int timestamp)
        : timestamp(timestamp)
    {
    }

    Time::Time(unsigned int days, unsigned int hours, unsigned int minutes, unsigned int seconds)
    {
        setTime(days, hours, minutes, seconds);
    }

    unsigned int Time::getDays()
    {
        return this->timestamp / 86400;
    }

    unsigned int Time::getHours()
    {
        return this->timestamp % 86400 / 3600;
    }

    unsigned Time::getMinutes()
    {
        return this->timestamp % 3600 / 60;
    }

    unsigned int Time::getSeconds()
    {
        return this->timestamp % 3600 % 60;
    }

    void Time::setTime(unsigned int timestamp)
    {
        this->timestamp = timestamp;
    }

    void Time::setTime(unsigned int days, unsigned int hours, unsigned int minutes, unsigned int seconds)
    {
        this->timestamp = days * 86400 + hours * 3600 + minutes * 60 + seconds;
    }

    void Time::up(unsigned int seconds)
    {
        this->timestamp += seconds;
    }

    int Time::down(unsigned int seconds)
    {
        if (this->timestamp - seconds > 0)
        {
            this->timestamp -= seconds;
            return 0;
        }
        else
        {
            return 1;
        }
    }

    std::string Time::toString()
    {
        std::stringstream ss;

        // Only show time values if they are more than 0
        if (this->getDays() != 0)
            ss << this->getDays() << "d ";

        if (this->getHours() != 0)
            ss << std::setfill('0') << std::setw(2) << this->getHours() << ":";

        if (this->getMinutes() != 0)
            ss << std::setfill('0') << std::setw(2) << this->getMinutes() << ":";
        
        // But always show seconds
        ss << std::setfill('0') << std::setw(2) << this->getSeconds();

        if (this->timestamp < 60)
            ss << "s";

        return ss.str();
    }

    Time Time::operator+(const Time t)
    {
        return Time(this->timestamp + t.timestamp);
    }

    std::ostream& operator<<(std::ostream& stream, Time& time)
    {
        stream << time.toString();
        return stream;
    }    
}