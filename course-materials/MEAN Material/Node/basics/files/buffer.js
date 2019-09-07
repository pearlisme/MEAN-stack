
/*
Pure JavaScript is Unicode friendly but not nice to binary data.
 When dealing with  TCP streams or the file system,
  it's necessary to handle octet streams.

Node provides Buffer class which provides instances to store
raw data similar to an array of integers but corresponds 
to a raw memory allocation outside the V8 heap
*/


var buf = new Buffer("Understanding buffering", "utf-8");
console.log("buffer length: " + buf.length);
//buf.write(string[, offset][, length][, encoding])

var buf = new Buffer('node js buffering in json');
var json = buf.toJSON(buf);
console.log(json);

var mybuffer = new Buffer('R0lGODlhFgAYAIAAAHbRSv///yH5BAAHAP8ALAAAAAAWABgAAAI2jI8AyH0Kl3MxzlTzzBziDkphaIxgaXJoWq2sF7xtLMO1fYu5K/Ovz/qkNqPLQ2UUKpIUyaQAADs===ii1j2i3h1i23h', 'base64');
require('fs').writeFile('logo.gif', mybuffer);

//Buffer.concat(list[, totalLength])

var buffer1 = new Buffer('Understanding Buffering ');
var buffer2 = new Buffer('Node js is fast');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());


/*
What Are Buffers?

Buffers are instances of the Buffer class in node, 
which is designed to handle raw binary data. 
 
    Each buffer corresponds to some raw memory allocated outside V8. 
        Buffers act somewhat like arrays of integers, 
        but are not resizable and have a whole bunch of methods specifically
        for binary data. 
        
            The "integers" in a buffer each represent a byte and so are 
            limited to values from 0 to 255 (2^8 - 1), inclusive.

Where You See Buffers:

buffers are usually seen in the context of binary data coming
from streams, such as fs.createReadStream.


Creating Buffers:

There are a few ways to create new buffers:

var buffer = new Buffer(8);
This buffer is uninitialized and contains 8 bytes.

var buffer = new Buffer([ 8, 6, 7, 5, 3, 0, 9]);
This initializes the buffer to the contents of this array.
Keep in mind that the contents of the array are integers representing bytes.

var buffer = new Buffer("I'm a string!", "utf-8")
This initializes the buffer to a binary encoding of the first string as 
specified by the second argument (in this case, utf-8). 

utf-8 is by far the most common encoding used with node, but Buffer also supports:

"ascii": This encoding is way fast, but is limited to the ascii character set. Moreover, it will convert null characters into spaces, unlike the utf-8 encoding.
"ucs2": A two-byte, little-endian encoding. Can encode a subset of unicode.
"base64": Base64 string encoding.
"binary": This is the "binary string" format mentioned earlier, and is in the process of being deprecated. Avoid its use.
Writing to Buffers

Given that there is already a buffer created:

> var buffer = new Buffer(16);
we can start writing strings to it:

> buffer.write("Hello", "utf-8")
5
The first argument to buffer.write is the string to write to the buffer, 
and the second argument is the string encoding.

buffer.write returned 5. This means that we wrote to five bytes of the buffer. 
The fact that the string "Hello" is also 5 characters long is coincidental,
since each character just happened to be 8 bits apiece. 
This is useful if you want to complete the message:

> buffer.write(" world!", 5, "utf-8")
7
When buffer.write has 3 arguments, the second argument indicates an offset, 
or the index of the buffer to start writing at.

Reading from Buffers:

            toString:

> buffer.toString('utf-8')
'Hello world!\u0000\t'

> buffer.toString("utf-8", 0, 12)
'Hello world!'
Individual octets:



Buffer.isBuffer(object)
This method checks to see if object is a buffer, similar to Array.isArray.

Buffer.byteLength(string, encoding)

check the number of bytes required to encode a string with a given encoding
(which defaults to utf-8). This length is not the same as string length, 
since many characters require more bytes to encode. For example:

        > var snowman = "☃";
        > snowman.length
       1
       > Buffer.byteLength(snowman)
       3
    The unicode snowman is only one character, but takes 3 entire bytes to encode!

    buffer.length

    This is the length of your buffer, and represents how much memory is allocated.
    It is not the same as the size of the buffer contents, 
    since a buffer may be half-filled. For example:

    > var buffer = new Buffer(16)
    > buffer.write(snowman)
    3
    > buffer.length
    16
    In this example, the contents written to the buffer only consist of three groups
    (since they represent the single-character snowman), 
    but the buffer's length is still 16, as it was initialized.

    buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)

    buffer.copy allows one to copy the contents of one buffer onto another. 
    The first argument is the target buffer on which to copy the contents of buffer, 
    and the rest of the arguments allow for copying only a subsection of the source buffer to somewhere in the middle of the target buffer. For example:

    > var frosty = new Buffer(24)
    > var snowman = new Buffer("☃", "utf-8")
    > frosty.write("Happy birthday! ", "utf-8")
    16
    > snowman.copy(frosty, 16)
    3
    > frosty.toString("utf-8", 0, 19)
    'Happy birthday! ☃'
    In this example, I copied the "snowman" buffer, which contains a 3 byte 
    long character, to the "frosty" buffer, to which I had written to the first 16 bytes. 
    Because the snowman character is 3 bytes long, the result takes up 19 bytes of 
    the buffer.

    buffer.slice(start, end=buffer.length)   
    > var puddle = frosty.slice(16, 19)
    > puddle.toString()
    '☃'
    > puddle.write("___")
    3
    > frosty.toString("utf-8", 0, 19)
   1
   'Happy birthday! ___'

   */