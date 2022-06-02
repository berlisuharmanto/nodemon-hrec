How to use this API

GET SPECIFIC ITEM
MAIN_URL/:id

Main User Login
http://localhost:5000/api/v1/userrec/login

Main User Sign Up
http://localhost:5000/api/v1/signup

POST Applicant
http://localhost:5000/api/v1/userapprec/signup

Accept & Reject

If you want to do Accept Method use follow with the manner as shown below:

Accept Applicant
http://localhost:5000/api/v1/userapprec/users:id/accept

Send notification
http://localhost:5000/api/v1/notification/post

If you want to do Reject Method use follow with the manner as shown below:

Reject Applicant
http://localhost:5000/api/v1/userapprec/users:id/delete

Send notification
http://localhost:5000/api/v1/notification/post

Get Notifications for a specific User:
http://localhost:5000/api/v1/notification/:hrd

\*Make sure using variable "hrd" not "id" as param or it'll not work otherwise

Delete Notification
http://localhost:5000/api/v1/notification/:id/delete

Upload Photos
http://localhost:5000/api/v1/imagerec/upload

Update Photos
http://localhost:5000/api/v1/imagerec/:owner

\*Make sure using PUT METHOD and variable "owner" not "id" as param or it'll not work otherwise

To Get A Photo follow the instructions below

Get Specific Photo
http://localhost:5000/api/v1/imagerec/:owner

Get the path as variable then
http://localhost:5000/ +filePath

\*Make sure using variable "owner" not "id" as param or it'll not work otherwise
