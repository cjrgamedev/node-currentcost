Current Cost electricity meter app
==================================

Node.js app for accessing and outputting data from a Current Cost electricity meter.

### Hardware

* Current Cost Electricity Meter (tested with one supplie

### Software

* Node.js
* node-serialport

### Usage

Run the app.

```bash
node server.js
```
### Example output

```xml
Serial port opened.
<msg><src>CC128-v1.29</src><dsb>00501</dsb><time>22:08:11</time><tmpr>19.9</tmpr><sensor>0</sensor><id>00077</id><type>1</type><ch1><watts>00232</watts></ch1></msg>
<msg><src>CC128-v1.29</src><dsb>00501</dsb><time>22:08:17</time><tmpr>19.9</tmpr><sensor>0</sensor><id>00077</id><type>1</type><ch1><watts>00232</watts></ch1></msg>
```
