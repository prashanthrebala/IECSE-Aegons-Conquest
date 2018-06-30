
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questionStatements = {

 	 1: "<p> Jon has obtained the results of a past war. He wants to estimate the skill level of each contestant. The contestants can be classified with high probability (w.h.p.) based on the number of solved problems: </p><ul><li>A contestant that solved exactly 0 problems is a beginner.</li><li>A contestant that solved exactly 1 problem is a junior developer.</li><li>A contestant that solved exactly 2 problems is a middle developer.</li><li>A contestant that solved exactly 3 problems is a senior developer.</li><li>A contestant that solved exactly 4 problems is a hacker.</li><li>A contestant that solved all five problems is  Dean.</li></ul><p>Please help Jon to identify the programming level of each participant.</p><h4>Input</h4><ul><li>The first line of the input contains a single integer N denoting the number of competitors.</li><li>N lines follow. The i-th of these lines contains five space-separated integers Ai, 1, Ai, 2, Ai, 3, Ai, 4, Ai, 5. The j-th of these integers (1 = j = 5) is 1 </li></ul><p>if the i-th contestant solved the j-th problem and 0 otherwise.</p><h4>Output</h4><p>For each participant, print a single line containing one string denoting Jon's classification of that contestant — one of the strings 'Beginner', 'Junior Warrior', 'Middle Warrior', 'Senior Warrior', 'Hacker', 'Dean' (without quotes). </p><h4>Constraints</h4><ul><li>1 = N = 5000</li><li>0 = Ai, j = 1 for each valid i, j</li></ul><h4>Example</h4><h4>Sample input 0:</h4><p>0 0 0 0 0</p><h4>Sample output 0:</h4><p>Beginner</p><h4>Sample input 1:</h4><p>0 1 0 1 0</p><h4>Sample output 1: </h4><p>Middle Warrior</p><h4>Test cases</h4><code>1 1 0 0 1<br></code>",
 	 2: "<p>Ned Stark has dedicated some numbers to the Robert Baratheon. A Stark number is one which has more than two factors and the eventual sum of its digits is equal to 1. Help Rob to discover such numbers between two numbers <b>M</b> and <b>N</b></p><h4>INPUT</h4>M, N separated by a space<br><h4>OUTPUT</h4>The frequency of Stark numbers between M and N including M, N.<br><h4>SAMPLE INPUT</h4>10 100<br><h4>SAMPLE OUTPUT</h4>8<h4>TESTCASE</h4><code>1000 1500</code><br>",
 	 3: "<p>Arya Stark practices sword-fighting with her teacher Syrio Forel. Because she wants to go pro, she tracks her points scored per battle sequentially in an array defined as <b>score = [s0, s1, ..., sn-1]</b>. After each contest <b>i </b>, she checks to see if score <b>si</b> breaks her record for most or least points scored so far during that season. Given Arya's array of scores for a season of n contests, find and print the number of times she breaks her record for most and least points scored during the season.<br><b>Note:</b> Assume her records for most and least points at the start of the season are the number of points scored during the first contest of the season.</p><h4>Input Format</h4><p>The first line contains an integer denoting <b> n </b>(the number of contests).<br>The second line contains <b> n </b> space-separated integers describing the respective values of <b>s0, s1, ..., sn-1.</b></p><h4>Constraints</h4><ul><li>1<= n <=1000</li><li>0<= Si <=10</li></ul><h4>Output Format</h4><p>Print two space-seperated integers describing the respective numbers of times her best (highest) score increased and her worst (lowest) score decreased.</p><h4>Sample Input</h4>9<br>10 5 20 20 4 5 2 25 1<br><h4>Sample Output</h4>2 4<br><h4>Explanation</h4><p>She broke her best record twice (after contests 2 and 7) and her worst record four times (after contests 1, 4, 6, and 8), so we print 2 4 as our answer. Note that she did not break her record for best score during contest 3, as her score during that contest was not strictly greater than her best record at the time.<h4>Test Case</h4><code>122<br>44316 52125 68761 68787 39275 96092 3320 80485 33978 55037 55142 47170 26255 59084 50342 38609 1015 10553 5292 94856 88112 50516 57426 51488 86656 69595 71558 34143 90351 6500 82497 34667 58626 67611 3454 14253 80055 23126 94738 30386 94516 66232 77556 20771 25316 44251 59380 42683 54804 81024 53891 42916 31540 11318 10757 34549 80913 98667 68692 87616 21519 67542 38635 80145 35153 58441 10750 31560 81568 21840 61946 92436 88072 55855 13207 29741 106 88939 88776 71262 86315 42668 30531 17856 53986 57640 52405 51251 56307 37449 38868 77826 21343 77503 74324 72848 52297 85074 4409 33865 6915 66355 26301 11339 22210 55860 57432 38668 61151 46209 9931 63818 88877 56814 81674 42863 14454 50431 10466 70761 4233 49334</code>",
 	 4: "<p>Bran is playing a video game in which his character competes in a hurdle race by jumping over  hurdles with heights <b>h0,h1,h2,...,hn-1</b>. He can initially jump a maximum height of <b> k</b> units, but he has an unlimited supply of magic beverages that help him jump higher! Bran can drink any number magic beverages and the maximum height he can jump during the entire race increases by the number of magic beverages he drink.Given n, k and the heights of all the hurdles, find and print the minimum number of magic beverages Bran must drink to complete the race.</p><h4>Input Format</h4>The first line contains two space-separated integers describing the respective values of <b>n</b> (the number of hurdles) and <b>k</b> (the maximum height he can jump without consuming any beverages).<br>The second line contains <b>n</b> space-separated integers describing the respective values of <b>h0,h1,h2,h3,h4,h5,hn-1</b><h4>Constraints</h4><ul><li>1 <= n,k <= 100</li><li>1 <= hi <= 100</li></ul><h4>Output Format</h4><p>Print an integer denoting the minimum number of magic beverages Bran must drink to complete the hurdle race.</p><h4>Sample Input</h4>5 4<br>1 6 3 5 2<br><h4>Sample Output</h4>2<br><h4>TestCase</h4><code>100 53<br>86 4 83 20 6 81 58 59 53 2 54 62 25 35 79 64 27 49 32 95 100 20 58 39 92 30 67 89 58 81 100 66 73 29 75 81 70 55 18 28 7 35 98 52 30 11 69 48 84 54 13 14 15 86 34 82 92 26 8 53 62 57 50 31 61 85 88 5 80 64 90 52 47 43 40 93 69 70 16 43 7 25 99 12 63 99 71 76 55 17 90 43 27 20 42 84 39 96 75 1</code>",
 	 5: "<p>There are two stags on a number line ready to jump in the positive direction (i.e, toward ). Each stag takes the same amount of time to make a jump, <p>regardless of distance. That is, if stag one jumps 3 meters and stag two jumps 5 meters, they each do it in one second, for example.Given the starting locations and jump distances for each stag, determine if and when they will land at the same location at the same time.<br><h4>Input Format</h4><ul><li>4 space-separated </li><li>X1,v1,x2,v2 starting locations and meters per jump for stags 1 and 2</li><li>0 <= x1 < x2 <= 10000</li><li>1 <= v1, v2 <= 10000</li></ul><h4>Output Format</h4><p>Print YES if they can land on the same location at the same time. Otherwise, print NO.</p><h4>Sample Input</h4><p>0 3 4 2</p><h4>Sample Output</h4><p>YES</p><h4>Explanation</h4><br>The kangaroos meet after 4 jumps.<br></p><h4>Sample Input</h4><p>0 2 5 3</p><h4>Sample Output</h4><p>NO</p><h4>TestCase</h4><code>288 9679 9653 99<br></code>",
 	 6: "<p>Lord Baelish decided to send secret letters to Joffrey. The letter was encrypted and contained jumbled alphabets and a number on the top. Joffrey told Petyr a specific pattern to encrypt the message. The pattern was such that starting letter of a word is shifted by that number, second letter by the given number incremented by <b>1</b>, third with the number incremented by <b>2</b>, and so on till the number becomes 9 and the number cycle is repeated from 1. The alphabetical cycle also repeats itself (after z it will start from a). For every word of the letter, process is repeated and secret message is encrypted. To maintain the secrecy only small letters are used.<br>(For example, If the word is 'apple' and number is 7,<b> 'a'</b> will be replaced by <b>'h'</b> (1+7), then first <b>'p'</b> will be replaced by 'x' (16+8), second 'p' will be replaced by 'y' (16+9), 'l' with 'm' (12+1), and 'e' with 'g' (5+2).)Getting frustrated by this pattern Petyr decided to make a computer code to encrypt his messages.<br></p><h4>INPUT</h4><p>In the First line the secret message is entered (all small letters),<br>In Second line a number between 1-9 is entered.</p><h4>OUTPUT</h4><p>Encrypted message as string.</p><h4>TESTCASE</h4><code>prometheus is awesome<br>7</code>",
 	 7: "<p>Robert is getting ready for war. He has to finish the compression library before he hits the war. Unfortunately, a simple bit problem seems to be bugging him. He's given two 32 bit unsigned numbers. For unkown reasons, he needs the sum of the numbers once they are bit reversed, i.e, lsb becomes <b>msb,lsb-1</b> becomes <b> msb-1</b> and so on. Formally, given two 32 bit unsigned numbers, reverse the binary representation and find the sum of the resultant numbers. For example, if the numbers were 4-bit numbers, 1101 would convert to 1011<br>Help Robert get a killer score.</p><h4>Input Format</h4></p>. Each line has two 32 bit unsigned numbers a and b.<br></p><h4>Constraints</h4>0 = a , b = 2^32-1<h4>Output Format</h4><p>For each test case print the required integer.</p><h4>Sample Input 0</h4><p>2 3 </br>4 5 </P><h4>Sample Output 0</h4><p>4294967296 <br>3221225472</p><h4>Explanation 0</h4><p>2 in binary is 00....10. Once it's reversed, it becomes, 01...00 3 in binary is 00....11. Once it's reversed, it becomes, 11...00<br>Once we add the two numbers, and convert it back to decimal number system, it converts to 4294967296</p><h4>Test case</h4><code> 102 1171 </code>",
 	 8: "<p>Jeoffrey is going through the books in Citadel where he comes across an old piece of paper with the following question. Help him find if a word is a triangle number.<br>The nth term of the sequence of triangle numbers is given by, <b> tn = n * (n+1) / 2 </b>; so the first ten triangle numbers are:<br>1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...<br>By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. If the word value is a triangle number then we shall call the word a triangle word.</p><br><h4>INPUT</h4><p>Single line input containing only one word in upper case</p><br><h4>OUTPUT</h4><p>Print 'Triangle word' if the word if a triangle word or '-1' if not.(without double quotes)</p><h4>SAMPLE INPUT</h4>SKY<br><h4>SAMPLE OUTPUT</h4>Triangle word<h4>TESTCASE</h4>CONSTRUCTION<br>",
 	 9: "<p>Danny has a sequence <b>A</b> containing<b> N </b> integers <b>A1, A2, ..., AN.</b><br>She is playing a game with this sequence. In this game, he may perform the following operation any number of times (including zero): Choose an arbitrary pair of elements from the sequence such that their sum is even, delete these two elements from the sequence and insert their sum into the sequence instead. The goal of the game is to minimise the number of elements in the sequence.<br>Help her to play the game and find the minimum possible size of the sequence at the end of the game!</p><h4>Input</h4><ul><li>The first line of each test case contains a single integer N.</li><li>The second line contains N space-separated integers A1, A2, ..., AN.</li></ul><h4>Output</h4><p>For each test case, print a single line containing one integer — the minimum possible final size of the sequence.</p><h4>Constraints</h4><ul><li>1 <= N <= 100</li><li>1 <= Ai <= 1,000 for each valid i</li></ul><h4>Input:</h4><p>1 2</p><h4>Output:</h4><p>2</p><h4>Test Case</h4><code>987622341<br></code>",
 	10: "<p>Jon has a string, s, consisting of <b>n</b> lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string 'aabcc' would become either 'aab' or 'bcc' after 1 operation.<br>Jon wants to reduce s as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Jon out by finding and printing 's non-reducible form!<br><b>Note:</b> If the final string is empty, print Empty String .</p><h4>Input Format</h4><p>A single string, <b>s</b><br></p><h4>Constraints</h4><p>1 < n <100<br></p><h4>Output Format</h4><p>If the final string is empty, print Empty String; otherwise, print the final non-reducible string.</p><h4>Sample Input 0</h4><p>aaabccddd</p><h4>Sample Output 0</h4><p>abd</p><h4>Sample Input 1</h4><p>baab</p><h4>Sample Output 1</h4><p>Empty String</p><h4>TEST CASE</h4><code>acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj <br></code>",
 	11: "<p>Raegar has a dragon farm. Soon N dragon will grow up on it and Raegar will sell them in a city nearby. <br> Dragon should be transported in boxes. If some box is not completely full, the dragons in it are bored, that's why each box should be completely full with dragon. <br> Raeger can buy boxes at a mill. The mill produces boxes of K kinds, boxes of the ith kind can contain in themselves ai dragons. Raegar can buy any amount of boxes, but he should buy boxes of only one kind to get a discount.<br> Of course, Raegar would buy boxes in such a way that each box can be completely filled with dragons and transported to the city. If there is no place for some dragons, Raegar will leave them on the farm. <br> Find out how many boxes and of which type should Raegar buy to transport maximum number of dragons. </p><h4> Input </h4><p> The first line contains an integer T. The next line contains two integers N and K - the number of dragons that will grow up on Raegar's farm and the number of types of boxes that the factory produces. The third line contains K integers a1, a2, ..., aK - the capacities of boxes. The following lines contain data regarding the next test case in the same format.</p><h4> Output </h4><p> Output two integers: the type of boxes that Raegar should buy and the number of boxes of that type Raegar should buy for each test case in a <b> new line </b>. Types of boxes are numbered from 1 to K in the order they are given in input. </p><h4> Sample Input </h4><p> 19 3<br> 5 4 10 </p><h4>Sample Output </h4><p> 2 4 </p><h4> Sample Input </h4><p> 28 3<br> 5 6 30 </p><h4> Sample Output </h4><p> 1 5 </p><h4>Test Case</h4><code> 928345721928 20 <br>7563927 5836284 5858595 37654 293748 8375920 37464939 634636 2727278 46375930 793935738 6483756 9585764 37465827495 59735 384573 473858 7683874 176738 5749568</code>",
 	12: "<p>Dracarys are playing a revised version of Russian Roulette, where, you have to unlock all doors in a given setting, in a given fashion, to enter the playing area.<li> Initially, any door is either locked or unlocked. </li><li> If a door is locked and you unlock it, then </li><li> If the next consecutive door is locked, it will automatically get unlocked (there will be no effect on any following door). </li><li> If the next consecutive door is already unlocked, nothing will happen. </p><h4> Input Format </h4><p> The first line contains an integer T, the number of test cases. <br>The next line contains a single integer n, denoting the total number of doors. <br>The next line contains n space separated integers, either 0 or 1 1. denotes a locked door and 0 denotes an unlocked door. <br>Following lines contain data about the next test case in the same format. <br> </p><h4> Output Format </h4><p> Print two integers separated by one space, denoting the minimum and maximum number of unlock operations needed respectively. </p><h4> Sample Input </h4><p> 10 <br>0 1 1 0 1 1 1 1 0 0 </p><h4> Sample Output </h4><p> 3 6 </p><h4>Test Case</h4><code> 100 <br>0 0 1 0 1 1 1 1 0 1 0 1 1 0 0 1 1 1 1 1 1 1 1 0 1 1 0 0 0 1 0 0 1 1 0 0 0 1 0 0 0 1 1 0 0 0 0 1 0 1 0 0 1 1 0 0 1 1 0 1 0 1 1 1 1 1 0 1 0 0 0 1 0 1 1 0 1 0 1 0 0 0 0 1 1 1 0 0 0 0 0 1 1 1 1 0 0 0 1 1 </code>",
 	13: "<p>Jaimie is an avid horse-rider. He tracks his rides meticulously, paying close attention to small details like topography. During his last ride, he took exactly n steps. For every step he took, he noted if it was an uphill or a downhill step. Jaimie's ride start and end at sea level. We define the following terms: <li> A mountain is a non-empty sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level. </li><li> A valley is a non-empty sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level. </li>Given Jaimie's sequence of up and down steps during his last ride, find and print the number of valleys he walked through. </p><h4> Input </h4><p> The first line contains an integer n denoting the number of steps in Jaimie's ride. <br> The second line contains a single string of n characters. Each character is E{u, d}(where U indicates a step up and D indicates a step down), and the ith character in the string describes Jaimie's ith step during the ride. </p><h4> Output </h4><p> Print a single integer denoting the number of valleys Jaimie walked through during his ride. </p><h4> Sample Input </h4><p> 8 <br>UDDDUDUU </p><h4> Sample Output </h4><p> 1 </p><h4>Test Case</h4><code>100 <br>DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD </code>",
 	14: "<p> Cersei likes listening to heavy metal and (occasionally) reading. No wonder Cersei is especially interested in texts concerning her favourite music style. <br>Cersei calls a string powerful if it starts with 'heavy' and ends with 'metal'. Finding all powerful substrings (by substring Cersei means a subsequence of consecutive characters in a string) in a given text makes our heroine especially joyful. Recently she felt an enormous fit of energy while reading a certain text. So Cersei decided to count all powerful substrings in this text and brag about it all day long. Help her in this difficult task. Two substrings are considered different if they appear at the different positions in the text. <br>For simplicity, let us assume that Cersei's text can be represented as a single string. </p><h4> Input </h4><p> Input contains a single non-empty string consisting of the lowercase Latin alphabet letters. Length of this string will not be greater than 10<sup>6</sup> characters. </p><h4> Output </h4><p> Print exactly one number - the number of powerful substrings of the given string. </p><h4> Sample Input </h4><p> heavymetalismetal </p><h4> Sample Output </h4><p> 2 </p><h4>Test Case</h4><code> trueheavymetalissotruewellitisalsosoheavythatyoucanalmostfeeltheweightofmetalonyou </code>",
 	15: "A new strain of flu has broken out in the Casterly Rock. Fortunately, a vaccine was developed very quickly and is now being administered to the public. The local health clinic is administering this vaccine, but the waiting line is very long.<br>For safety reasons, people are not allowed to stand very close to each other as the flu is not under control yet. However, many people were not aware of this precaution. A health and safety official recently examined the line and has determined that people need to spread out more in the line so that they are at least T units away from each other. This needs to be done as quickly as possible so we need to calculate the minimum distance D such that it is possible for every person to move at most D units so the distance between any two people is at least T. Specifically, D should be the minimum value such that there are locations x'i so that |xi - x'i| <= D for each person i and |x'i - x'j| >= T for any two distinct people i,j. Furthermore, since nobody can move past the receptionist we must also have that x'i >= 0.<br>The location of each person is given by the number of meters they are standing from the receptionist. When spreading out, people may move either forward or backward in line but nobody may move past the location of the receptionist.<br><h4>Input</h4>The first line of input contains a single integer K <= 30 indicating the number of test cases to follow. Each test case begins with a line containing an integer N (the number of people) and a floating point value T (the minimum distance that should be between people). The location of each person i is described by single floating point value xi which means person i is xi meters from the receptionist. These values appear in non-decreasing order on the following N lines, one value per line.<br><h4>Output</h4>For each test case, you should output the minimum value of D with exactly 4 decimals of precision on a single line.<br><h4>Sample Input:</h4>2<br>2 4<br>1<br>2<br>2 2<br>1<br>2<br><h4>Sample Output:</h4>2.0000<br>0.5000<br><h4>Explanation</h4>In the first test case, the first person can move to location 0 and the second to location 4 with the maximum distance moved being 2. In the second case, person 1 can move to location 0.5 and person 2 can move to location 2.5 for a maximum distance moved being 0.5. Finally, in the last output the first person does not move, the second moves to location 1, the third to location 2, and the fourth to location 3. The maximum distance moved by any person was done by the third person who moved 1.4 meters to their destination.<br><br><b>NOTE: </b>Do not have any leading or trailing white spaces in each of the lines.<h4>Test Case</h4><code>2<br>3 5<br>1.5<br>1.9<br>9.2<br>8 1<br>1.1<br>2.3<br>3.2<br>3.3<br>3.4<br>5.6<br>6.6<br>6.7<br></code>",
 	16: "Tyrion is working at the cash counter at a fun-fair, and he has different types of coins available to him ininfinite quantities. The value of each coin is already given. Can you help him and determine the number of ways ofmaking change for a particular number of units using the given types of coins?<br>For example, if you have 4 types of coins, and the value of each type is given as 8, 3, 1, 2 respectively,you can make change for 3 units in three ways: {1, 1, 1}, {1, 2} and {3}.<br><h4>Input Format</h4>The first line contains T, the number of test cases. The following line contains two space-separatedintegers describing the respective values of n and m for the first test case, where:<br>n is the number of units<br>m is the number of coin types<br>The next line contains m space-separated integers describing the respective values of each coin type : c0,c1, .... cm-1<br>(the list of coins available in infinite amounts) (Each ciis guaranteed to be distinct).<br><h4>Output Format</h4>Print a long integer denoting the number of ways we can get a sum of n from the given infinite supply oftypes of coins.<br><h4>Sample Input 0</h4><code>1<br>4 3<br>1 2 3<br></code><h4>Sample Output 0</h4><code>4</code><h4>Explanation 0</h4>There are four ways to make change for using coins with values given by :<br>1. {1, 1, 1, 1}<br>2. {1, 1, 2}<br>3. {2, 2}<br>4. {1, 3}<br>Thus, we print 4 as our answer.<br><h4>Test Case</h4><code>245 26<br>16 30 9 17 40 13 42 5 25 49 7 23 1 44 4 11 33 12 27 2 38 24 28 32 14 50<br></code>",
 	17: "You have two friends. You want to present each of them several positive integers. You want to present cnt1 numbers to the first friend and cnt2 numbers to the second friend. Moreover, you want all presented numbers to be distinct, that also means that no number should be presented to both friends.<br>In addition, the first friend does not like the numbers that are divisible without remainder by prime number x. The second one does not like the numbers that are divisible without remainder by prime number y. Of course, you're not going to present your friends numbers they don't like.<br>Your task is to find such minimum number v, that you can form presents using numbers from a set 1, 2, ..., v. Of course you may choose not to present some numbers at all.<br>A positive integer number greater than 1 is called prime if it has no positive divisors other than 1 and itself.<br><h4>Input</h4>The only line contains four positive integers cnt1, cnt2, x, y - the numbers that are described in the statement. It is guaranteed that numbers x, y are prime.<br><h4>Output</h4>Print a single integer - the answer to the problem.<br><h4>Sample Input</h4><code>3 1 2 3</code><h4>Sample Output</h4><code>5</code><h4>Test Case</h4><code>1000 9999999 29983 29989</code>",
 	18: "There are a lot of Grejoys who are jealous of the fact that they do NOT have any specialty, they're the... normal type of Greyjoys. But, what they fail to realize is that their power is their normalcy, theability to think, rationalize and then act.But, they do have an additional power... Greyjoys like Theon - who are normal, can figure out if aperson is a traitor or not. And they need to use their power to a great extent.In an array, which consists of N elements, A1, A2, ..., AN, if a subarray has the total number of distinctelements as that of the original array, that determines the presence of a traitor.You've to help the Greyjoys in figuring out the total number of subarrays having totalnumber of distinct elements same as that of the original array.Input format:First line contains an integer T, the number of test cases. The next T line of the input will consist of asingle integer N followed by N integers A1, A2, ... , AN.Output format: Output the answer to the problem.<h4>SAMPLE INPUT</h4><code>5<br>1 2 2 1 1<br></code><h4>SAMPLE OUTPUT</h4><code>8<br></code><h4>Explanation</h4>All the possible subarrays are [1,2], [1,3], [1,4], [1,5], [2,4], [2,5], [3,4], [3,5]<h4>Test Case</h4><code>30<br>121232  861456 378932 9657832 9657832 2496678 378932 861456 7433889 10121014 7433889 62628 4999643 4999543 10121014 2496678 378932 378932 861456 10121014 861456 9657832 378932 4999643 121232 62628 598765 861456 9657832 378932<br></code>",
 	19: "Euron and his friend Theon have started painting a wall. Euron is painting the wall red and Theon is painting it pink. You can consider the wall being made of a very large number of bricks, numbered 1, 2, 3 and so on.<br>Euron has the following scheme of painting: he skips x - 1 consecutive bricks, then he paints the x-th one. That is, he'll paint bricks x, 2·x, 3·x and so on red. Similarly, Theon skips y - 1 consecutive bricks, then he paints the y-th one. Hence he'll paint bricks y, 2·y, 3·y and so on pink.<br>After painting the wall all day, the boys observed that some bricks are painted both red and pink. Euron has a lucky number a and Theon has a lucky number b. Boys wonder how many bricks numbered no less than a and no greater than b are painted both red and pink. This is exactly your task: compute and print the answer to the question. <br><h4>Input</h4>The input will have a single line containing four integers in this order: x, y, a, b. <h4>Output</h4>Output a single integer — the number of bricks numbered no less than a and no greater than b that are painted both red and pink.<br><h4>Sample Input</h4><code>2 3 6 18</code><h4>Sample Output</h4><code>3</code><h4>Test Case</h4><code>10 15 69 195610342<br></code>",
 	20: "Last week, Yara learned about a new type of equations in her math class called Modular Equations. Lets define i modulo j as the remainder of division of i by j. A Modular Equation, as Yara's teacher described, is an equation of the form a mod x = b in which a and b are two non-negative integers and x is a variable. We call a positive integer x for which a solution of our equation.<br>Yara didn't pay much attention to the class since she was watching a movie. She only managed to understand the definitions of these equations.<br>Now she wants to write her math exercises but since she has no idea how to do that, she asked you for help. She has told you all she knows about Modular Equations and asked you to write a program which given two numbers a and b determines how many answers the Modular Equation a mod x = b has.<br><h4>Input</h4>In the only line of the input two space-separated integers a and b are given.<br><h4>Output</h4>If there is an infinite number of answers to our equation, print 'infinity' (without the quotes). Otherwise print the number of solutions of the Modular Equation a mod x = b.<br><h4>Sample Input</h4><code>9435152 272<br></code><h4>Sample Output</h4><code>282</code><h4>Test Case</h4><code>233758336 10665466</code>"

};

var questions = 

	{
		1 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "6b535c40fb1e9fc67842a16bcb185fbcf55a4df0aa222888f2150381917ee0da"

		},

		2 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617"

		},

		3 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "55a6ea8892c3f465ed0fa61e578cb9330f702decfa76dfef0d7c80e8aec971a3"

		},

		4 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 60,
			'answer' : "31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617"

		},

		5 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "23794d91c53ae875c8e247d72561e35d9d06ee07c70c9e0dbcc977a6d161504a"

		},

		6 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "2cc8f742b952dbb07a4c53e787f817e24aa8887cf0daa4c0606b0630e95d0e4c"

		},

		7 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "534f01cdca898d546b59504e5901a19620c5bf7462e942127b601deb61d5fbb3"

		},


		8 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 60,
			'answer' : "be9b0082f3c5738b7ba2f8e6e2fbb5ea355017b1491bd98d9bb2ba0b48e544b6"

		},

		9 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"

		},

		10 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "7b317658716c493c3e01ba79e964af648fcacf175edb0423cdbe7b56af7bea29"

		},

		11 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "e7e0247b5e81124fdb77b579f8546311ad11236c25e58ffa79d178652e1a770a"

		},

		12 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 60,
			'answer' : "9d4e3e64293aca86e1930a6cbd473e9e68333cdaca84bcbdef9b12a2757909d6"

		},

		13 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"

		},

		14 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"

		},
		
		15 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "b5e0811d477dda939f58340e7c61c019b5bd270e35fa5b18b8f70477d3e2be47"

		},

		16 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 60,
			'answer' : "5f630060329f8584f0e12a26f3a36ffea60e1fdcd6b6bd0c6a0a8a0c0d4d6486"

		},

		17 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "6ec21f02f033ece74460c935f8e6b36e3aace36ecca54d21ac079329915b21b8"

		},

		18 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "71ee45a3c0db9a9865f7313dd3372cf60dca6479d46261f3542eb9346e4a04d6"

		},

		19 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "9a5337a2d172713726c670a941c97a33f395a303b58e654b818295e555bf621e"

		},

		20 : {

			'penalties' : 0,
			'solved' : false,
			'attempted' : false,
			'score' : 60,
			'answer' : "3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"

		}

	};
// console.log(questions)