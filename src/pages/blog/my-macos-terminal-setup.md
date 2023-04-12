---
title: My MacOS Terminal Setup
date: 12/6/2022
description: How I setup my terminal on every MacOS computer that I use.
layout: ../../layouts/BlogLayout.astro
---

The terminal is one of the most important tools in a developers toolbox. It gives the power to do many things. This is why I put very careful thought into how my terminal is set up. I will show you step by step how to set up a very fast and elegant terminal that can get the job done.

## Zsh

One of the best things Apple has done was make zsh the default shell for the terminal. Zsh allows for far greater customization than bash, because of this we are going to stick with using zsh.

You can check to see if your running zsh by running this:

```bash
zsh --version
```

If you are using bash or any other shell and would like to switch to zsh you can do so by running the command below and then refreshing your terminal with CMD + N.

```bash
chsh -s /bin/zsh
```

## iTerm

Although the default macOS terminal is great and extremely fast. There is room for improvement, specifically customization. iTerm2 is a great way to quickly add color themes, font themes and general customization. We can install iTerm by visiting this link [https://iterm2.com/](https://iterm2.com/) and pressing download. When iTerm is downloaded we can then open the zip folder and drag the application into our applications folder.

![blog-post-2-downloads-folder.png](/images/blog/blog-post-2-downloads-folder.png)

While iTerm is great for making your terminal look colorful, it should be known that it is not necessary. If you are the type of person to prioritize speed and minimalism the default terminal is going to reign in those two categories.

## Oh My Zsh

The next step on our list is to install OhMyZsh which is a framework that gives the user the ability to quickly install a whole lot of different plugins, and themes. This is going to be crucial for terminal setup.

We can install ohmyzsh by running this curl command.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

You can read more about all the possibilities and the awesome community behind oh my zsh here [https://ohmyz.sh/](https://ohmyz.sh/).

## Conclusion

As you can see there is a lot that goes into making a customized terminal. Customizing your terminal doesn’t stop here as well, there are plenty of plugins and tools you can add to make it even more personalized. Truly there is no limit to this space. I hope you were able to find this useful.
