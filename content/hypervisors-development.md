---
title: "Hypervisors | Expert hypervisor development and maintenance"
description: |
   "We are capable of developing and maintain hypervisors depending on your needs. Our focus are embedded hypervisors, but we are able to deal with any."
image: "images/hyper-visor.jpg"
keywords: [""]
draft: false
layout: "hypervisors-development"

introduction:
  image: "images/services/hypervisor.png"
  content: |
    ## Introduction
    {.h3}

    A hypervisor is a hardware virtualization technique that allows multiple guest operating systems (OS) to run on a single host system at the same time. The guest OS shares the hardware of the host computer, such that each OS appears to have its own processor, memory and other hardware resources.

    We can distinguish two kinds of hypervisors:

    *   **Type 1 –** deployed directly atop the system’s hardware without any underlying operating systems or other software. These are called “bare metal” hypervisors and are the most common and popular type of hypervisor.
    *   **Type 2 –** run as a software layer atop a host operating system and are usually called “hosted” hypervisors (their performance is significantly lower than Type 1 hypervisors).


hypervisors_usage:
  image: "images/hypervisor/closeup-complex-complexity.jpg"
  content: |
    ## What are hypervisors used for?
    {.h3}

    One of the key functions a hypervisor provides is isolation, meaning that a guest cannot affect the operation of the host or any other guest, even if it crashes. As such, the hypervisor must carefully emulate the hardware of a physical machine, and (except under carefully controlled circumstances), prevent access by a guest to the real hardware.

    Buying separate servers for different applications is expensive, time-consuming, and takes up space. Type 1 hypervisors allow IT to better utilize server hardware, thus lowering capital expenditures, freeing up real estate, and minimizing energy usage. Most of them also automate resource allocation as needed, which results in dynamic and efficient resource allocation in the virtualized environment.

    Hypervisors do not simply virtualize machines, they also protect high-availability with native durability and redundancy. For example, a failover cluster supports virtualized node environments for continued availability if a node goes down.

about_embedded_hypervisors:
  - title: "What are embedded hypervisors"
    content: |
      Embedded hypervisor refers to a type 1 hypervisor deployed within an embedded system. They are used when security and system reliability is crucial. Like i.e.

      *   transportation
      *   avionics
      *   military
      *   robotics
      *   any life critical systems
    youtube_video_id: ""

  - title: "What can we do?"
    content: |
      This is just an example. We are capable of developing and maintain hypervisors depending on your needs. Our focus are embedded hypervisors, but we are able to deal with any.
    youtube_video_id: "lddSYz8PAck"

why_hypervisors:
  title: "Why do you need embedded hypervisors?"
  content: |
    The main purpose of using it is to increase security and reliability. If you are working on any project which is
    life or mission critical it is almost a must-have. A hypervisor is your last line of defense and may save you from
    the worst effects of potential failure. It not necessary means that you have to be a producer of flight safety
    systems. Nowadays it may concern i.e. traffic lights, industry safety or automotive.

why_3mdeb:
  title: "Why 3mdeb?"
  content: |
    3mdeb took a part of many projects where embedded hypervisors were a part of the system. We are familiar with building hypervisors using **[Bareflank](https://bareflank.github.io/hypervisor/)**, [**ACRN**](https://projectacrn.org/) and other technologies, and adjusting system tables to make it work correctly. Moreover, we can combine it in an environment with coreboot and our dedicated firmware, what can provide you a complete, fully operational system.

    Don’t waste your precious time! **[Contact Us](https://3mdeb.com/contact/)** or [**book a call**.](https://calendly.com/3mdeb)

  technologies:
    - "images/hypervisor/acrn.jpg"
    - "images/hypervisor/bare.jpg"
---
