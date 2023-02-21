---
title: "Automated Validation"
description: ""
image: "images/automated-validation/header-bg.jpg"
keywords: [""]
draft: false
layout: "automated-validation"

introduction:
  image: "images/services/validation.png"
  content: |
    ## Automated Validation
    {.h3}

    Basic validation concept is to check whether the device / firmware / software is working according to requirements. For any environment that evolves, that is constantly upgraded and expanded it is reasonable to check all provided features after any hardware or code changes.

    Assuming that the subject of a validation has a lot of features, the process may be long-lasting and doing it manually may be unreasonable. To spare a significant amount of time and make an effort productive it is a good idea to automate the whole process.

    Our hardware and **[RobotFramework](https://robotframework.org/)** infrastructure is capable to support many of recently used boards to c onfirm their features. If You consider constant changes of revision of the onfirm their features. If You consider constant changes of revision of the onfirm their features. If You consider constant changes of revision of the subject it is suggested to take a regression test suite. With regression testing, we can confirm, that a recent version of the hardware and/or embedded firmware has not adversely affected existing features.

  technologies:
    - "images/automated-validation/robotframe.png"
    - "images/used-technology/python.png"
    - "images/used-technology/linux-logo.png"
    - "images/used-technology/docker.png"
    - "images/automated-validation/git.png"
    - "images/automated-validation/cockpit.png"

regression_testing:
  - content: |
      ## Regression testing is <br> required whenever:
      {.h3}

      *   hardware schematics have been changed
      *   embedded firmware code has been modified
      *   new features have been implemented
      *   there is a change in the embedded firmware framework version (for example coreboot version)
      *   there is a change in the specification that embedded firmware relies upon on (for example UEFI, ACPI, SMBIOS)
      
  - content: |
      ## Key features
      {.h3}

      *   Fully automated, fast and accurate validation
      *   Rigorous dependency analysis (requirements vs. test-cases)
      *   Full (over 100 tests) or partial (on clients demand) testing package
      *   RobotFramework.org infrastructure
      *   Detailed HTML logs and **[spreadsheet](https://docs.google.com/spreadsheets/d/1_uRhVo9eYeZONnelymonYp444zYHT_Q_qmJEJ8_XqJc/edit#gid=0)** reports attached
      *   Bug management support
      *   Time comparison summaries\*
      *   Optional CI integration
      *   Affordable pricing

      _\*available only with time-based regression service_

service_options:
  title: "Service options"
  subtitle: "Client is obligated to choose the type of regression testing:"
  packages:
    - info: "and the period of time for validation:"
      list:
        - icon: "images/automated-validation/service-option-1.1.png"
          title: "Full"
        - icon: "images/automated-validation/service-option-1.2.png"
          title: "Custom"

    - info: "receiving a customized validation package."
      list:
        - icon: "images/automated-validation/service-option-2.1.png"
          title: "One-time"
        - icon: "images/automated-validation/service-option-2.2.png"
          title: "Time-based"

service_details:
  - content: |
      ## QA technologies
      {.h3}

      Technologies that are supported by [**Regression Testing Solutions**](https://shop.3mdeb.com/shop/product/regression-testing-solutions/) can be part of the validation package requested by the client:

      *   **Installation validation**
          *   **Linux based systems** (Debian, Ubuntu, Voyage)
          *   **BSD based systems** (pfSense, OPNsense)
      *   **OS performance validation**
      *   **Embedded Firmware validation** (coreboot, UEFI/edk2, U-Boot, Zephyr, mbedOS, BIOS, bare metal)
      *   **Hypervisors validation** (Bareflank, Xen, Intel ACRN)
      *   **Preboot Execution Environment** (PXE) over network validation
      *   **Hardware compatibility testing** (storages, modems, security modules)

  - content: |
      ## Bug management
      {.h3}

      All malfunctions and bugs are precisely described and linked in the service selected by the client. We are experienced in:

      *   **GitLab**
      *   **GitHub**
      *   **Atlassian/JIRA Software**

      Although, any new tracking tool is welcome and will surely become familiar in no time.

      _<b>NOTE</b>: If there will be a request for the help with bugs elimination (mainly in the embedded firmware area) we can also provide such support._

supporting_technologies:
  - "images/automated-validation/tech/debian.png"
  - "images/automated-validation/tech/ubuntu.png"
  - "images/automated-validation/tech/pfsense.png"
  - "images/automated-validation/tech/opnsense.png"
  - "images/coreboot.png"
  - "images/internet-things/supporting-technologies/uboot-logo.png"
  - "images/automated-validation/tech/zephyr.png"
  - "images/automated-validation/tech/mbed.jpg"
  - "images/automated-validation/tech/bare.jpg"
  - "images/automated-validation/tech/xen.png"
  - "images/automated-validation/tech/intel.png"

  
---