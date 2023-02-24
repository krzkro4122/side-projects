#include "Time.h"
#include <assert.h>
#include <iostream>

int main()
{
    // Test #1
    {
        std::cout << "\033[36m" << "Test case #1 in progress..." << "\033[0m" << std::endl;

        int timestamp = 101069;
        timer::Time t(timestamp);
        std::cout << t << std::endl;

        assert(t.getDays() == 1);
        assert(t.getHours() == 4);
        assert(t.getMinutes() == 4);
        assert(t.getSeconds() == 29);

        t.up(1);
        std::cout << t << std::endl;

        t.up(1203012401203401);
        std::cout << t << std::endl;

        t.setTime(0, 1, 1, 1);
        std::cout << t << std::endl;
    }
    std::cout << "\033[32m" << "Test case #1 passed." << "\033[0m" << std::endl;

    // Test #2
    {
        std::cout << "\033[36m" << "Test case #2 in progress..." << "\033[0m" << std::endl;

        timer::Time t(0, 0, 0, 0);

        t.down(12314);
        t.down(0);
        t.down(1);

        assert(t.getDays() == 0);
        assert(t.getHours() == 0);
        assert(t.getMinutes() == 0);
        assert(t.getSeconds() == 0);

        std::cout << t << std::endl;
    }
    std::cout << "\033[32m" << "Test case #2 passed." << "\033[0m" << std::endl;

    // Test #3
    {
        std::cout << "\033[36m" << "Test case #3 in progress..." << "\033[0m" << std::endl;

        timer::Time t1(4, 3, 2, 1);
        timer::Time t2(1, 2, 3, 4);

        std::cout << t1;

        t1 = t1 + t2;

        assert(t1.getDays() == 5);
        assert(t1.getHours() == 5);
        assert(t1.getMinutes() == 5);
        assert(t1.getSeconds() == 5);

        std::cout << " + " << t2 << " = " << t1 << std::endl;
    }
    std::cout << "\033[32m" << "Test case #3 passed." << "\033[0m" << std::endl;

    return 0;
}