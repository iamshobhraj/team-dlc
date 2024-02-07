# DLC

### Smart Attendance and Logging System

This application is a smart attendance system that can capture images periodically and recognize the faces of multiple people in the images to mark attendance.

## Overview
The system works by taking images from a camera at predefined intervals. These images are sent to a facial recognition model that can detect and recognize multiple faces in a single image.
The recognized faces are matched against a database of known people. If there is a match, that person is marked as present at the time the image was taken.

Attendance logs contain information such as:

- Names of people recognized
- Timestamp of recognition
- Image taken
- This allows easy generation of attendance reports showing who was present and at what times.

## Features

- Face recognition of multiple people from single images
- Periodic unattended image capture
- Real-time attendance marking
- Attendance log storage
- Attendance analytics and reports

## Usage Scenarios

This system is flexible enough for usage in a variety of scenarios including:

- Classrooms
- Conference rooms
- Office spaces
- Public parks and locations
- Anywhere that needs easy automated attendance management.


