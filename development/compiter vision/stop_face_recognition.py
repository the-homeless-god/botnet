import cv2

# Hit 'q' on the keyboard to quit!
def camera_break():
    if cv2.waitKey(1) & 0xFF == ord('q'):
        exit()
        