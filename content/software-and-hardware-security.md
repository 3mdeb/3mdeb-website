---
title: "Software and Hardware Security"
description: ""
image: "/images/hardware-security/header-bg.jpg"
keywords: [""]
draft: false
layout: "software-and-hardware-security"

introduction:
  image: "/images/services/security.png"
  content: |
    ## Hardware Security
    {.h3}

    Hardware security is vulnerability protection that comes in the form of a physical device rather than software that is installed on the hardware of a computer system.

    One of our areas of interest is hardware security evaluation. As we know exactly how a secure system should behave and what features it should contain we have a point of view about a system’s actual condition. If you are interested of taking care of your system security you shouldn’t hesitate and **[call us](https://calendly.com/3mdeb)** to find any vulnerabilities that may threat you. We will prepare a report, in which we will describe all the issues we’ve uncovered and what we recommend to do. In example we can check Your hardware vulnerability to [**zombieload**](https://zombieloadattack.com/), [**meltdown**](https://meltdownattack.com/) or [**spectre**](https://meltdownattack.com/) attacks. This is crucial. If you know your hardware weaknesses, you can handle them.

    A **[Trusted Platform Module](https://shop.3mdeb.com/product/tpm2/)** is a hardware chip on the computer’s mainboard that stores cryptographic keys used for encryption. Many computers include a TPM, but if the system doesn’t include it, it is feasible to add one. Once enabled, the Trusted Platform Module provides full disk encryption capabilities. It becomes the “root of trust” for the system to provide integrity and authentication to the boot process. It keeps hard drives locked/sealed until the system completes a verification or authentication check.

    The TPM includes a unique RSA key burned into it, which is used for asymmetric encryption. Additionally, it can generate, store, and protect other keys used in the encryption and decryption process.

    We have also a decent experience in Microchip ECC508A/ECC608A/CEC1702 secure elements. These are CryptoAuthentication™ family devices with highly secure hardware-based key storage. These devices have a flexible command set that allows use in many applications, including network/IoT node protection, anti-counterfeiting, storing secure data and checking user password.

    **But why should you buy a fish, if you can buy a fishing rod?**

    **[3mdeb](/)** is also a training provider. We can prepare you a boot camp, where you and your staff will learn how to deal with all the security issues. We are experienced trainers and have a lot of training materials. If you are interested just [**contact us**](/contact/) or **[book a call](https://calendly.com/3mdeb)**.
  images:
    - "/images/open-source-hardware/microchip.png"
    - "/images/coreboot.png"

software_security:
  image: "/images/hardware-security/security.jpg"
  content: |
    ## Software Security
    {.h3}

    Any compromise to integrity, authentication and availability makes a software insecure. Software systems can be attacked to steal information, monitor content, introduce vulnerabilities and damage the behavior of software.

    Many companies produce devices that contain stock firmware. This is obvious, but if it is proprietary [**it may contain bugs or vulnerabilities**](https://www.computerworld.com/article/2505096/researcher-creates-proof-of-concept-malware-that-infects-bios--network-cards.html), you may not know about. That’s why we prefer an open-source software and firmware. We consider it safer and we are able to increase its security clearing any bugs or issues, that may impact overall safety.

    We can enable **[coreboot](https://www.coreboot.org/)** on your platform, what will significantly decrease possibility of any successful attacks. It is signed and can be safely updated, [**and will turn your device into Attacker-Unfriendly**.](https://www.wired.com/2015/02/firmware-vulnerable-hacking-can-done/)

    We can’t just say we develop security software. We develop software, that is safe. Any information that has a value can be priced. If your device may contain data, that could be stolen and used in some manner that would expose you to several cost, then you can estimate how much should you invest in security. There are many papers describing methods of such evaluation, like i.e. [**Gordon-Loeb Model**](https://www.researchgate.net/publication/299408557_Investing_in_Cybersecurity_Insights_from_the_Gordon-Loeb_Model/link/57232bf808aee491cb36ff31/download).

    It’s not reasonable to over economize your device security. Remember, that in present time this is one of the most important attribute for your potential client.

how_to_improve_security:
  content: |
    ## How to enhance your Security?
    {.h3}

    Simple. Just **[contact us](/contact/)** and prepare a project charter. Then send us your device. First of all we’ll test it for any security issues, then we’ll suggest hardware and software solutions that will increase its security (and stability, and performance and so on…). We’ll use our offensive security validation to prove the improvement, and we’ll be happy to follow you during developing process.
---