---
title: "Elements"
date: 2021-10-27T16:49:27+06:00
description: ""
image: ""
keywords: [""]
draft: false
---

Here is an example of headings. You can use this heading by the following
markdown rules. For example: use `##` for heading 2 and use `######` for
heading 6.

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Emphasis

The emphasis, aka italics, with *asterisks* or *underscores*.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

The combined emphasis with **asterisks and *underscores***.

Strike through uses two tildes. ~~Scratch this.~~

{{< button "hello" "#" >}}

### Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](events.md)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

### Paragraph

Some example text here.

### Ordered List

1. List item
2. List item
3. List item
4. List item
5. List item

### Unordered List

* List item
* List item
* List item
* List item
* List item

### Tab

{{< tabs "code" >}}

{{< tab "python" >}}

```python
print("Hello World!")
```

{{< /tab >}}

{{< tab "R" >}}

```R
> print("Hello World!")
```

{{< /tab >}}

{{< tab "Bash" >}}

```Bash
echo "Hello World!"
```

{{< /tab >}}
{{< /tabs >}}

{{< tabs "code" >}}

{{< tab "python" >}}

```python
print("Hello World!")
```

{{< /tab >}}

{{< tab "R" >}}

```R
> print("Hello World!")
```

{{< /tab >}}

{{< tab "Bash" >}}

```Bash
echo "Hello World!"
```

{{< /tab >}}
{{< /tabs >}}

### Collapse

{{< collapse "Why should you need to do this?" >}}

* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur
{{< /collapse >}}

{{< collapse "How can I adjust Horizontal centering" >}}

* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur
{{< /collapse >}}

{{< collapse "Should you use Negative margin?" >}}

* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur adipisicing elit.
* Lorem ipsum dolor sit amet consectetur
{{< /collapse >}}

### Code and Syntax Highlighting

This is an `Inline code` sample.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

### Blockquote

> This is a blockquote example.

### Inline HTML

Avoid using inline html.

### Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

### Image

{{< image
    src="images/favicon.png"
    caption="" alt="alter-text"
    height="" width=""
    position="center"
    command="fill"
    option="q100"
    class="img-fluid"
    title="image title"
    webp="false" >}}

### Gallery

{{< gallery
    dir="images/gallery"
    class=""
    height="400"
    width="400"
    webp="true"
    command="Fit"
    option=""
    zoomable="true" >}}

### Youtube video

{{< youtube ResipmZmpDU >}}

### Custom video

{{< video
    src="<https://www.w3schools.com/html/mov_bbb.mp4>"
    width="500"
    height="auto"
    autoplay="false"
    loop="false"
    muted="false"
    controls="true"
    class="" >}}
