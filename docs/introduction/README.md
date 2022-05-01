# Introduction

**discue.io** is a secure and reliable service that enables event-driven communication. It was designed and built from the ground up to support elastic workloads.

It is built solely upon standards and protocols.

## Components
The main components of **discue.io** are:

- Queues: `secure and persistent storage`
- Broadcasts: `functions that publish messages to registered listeners`
- Listeners: `endpoints in your applications that received broadcasted messages`
- Messages: `strings that will eventually be transmitted to all registered listeners`

**Queues** receive and store event **messages**. Each successfully stored message triggers a **broadcast**. A **broadcast** looks up **listeners** that are registered for the target **queue** and forwards the **message**. 

**Listeners** must be registered for one or multiple **queues** to receive broadcasted **messages**.

**Messages** are simple JSON Objects that contain a string property with name `data`. The value of `data` will eventually be sent to all **Listeners**

## How you can benefit from our service
Let's say we operate an e-commerce service that sells and ships books to customers. We want to be as open and transparent as possible. After a customer has completed an order, we want them to receive an email notification whenever the status of an order changed. The following status are defined:

- Order received
- Payment successful
- Order shipped
- Order received

Additionally we want to send an notification if an item is out of stock, or the payment failed. All status changes must also be shown in the customer dashboard.

Your development team is split into various pizza teams to allow independent feature development and deployment. 

❌ **Without** event-driven communication the dashboard team would have to source data from the payment and shipment teams whenever a customer opens the dashboard page. That is not only slow but also error-prone. The dashboard probably won't work whenever data can't be gathered from the payment, or the shipment team. 

✔ **With event-driven communication, each team merely publishes events to the event broker**. The **event-broker** then takes care that all **messages** are published to all consumers that are interested in this event. In this scenario your teams only need to know about the **event-broker**. They **don't** have to know about other teams that might or might not need their data.

## Why not ..
