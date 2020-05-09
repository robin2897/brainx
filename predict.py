import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

class tumor:
    def __init__(self,filename):
        self.filename =filename


    def predictiontumor(self):
        # load model
        model = load_model('brain_vgg1000epoch_.h5')

        # summarize model
        #model.summary()
        imagename = self.filename
        test_image = image.load_img(imagename, target_size = (224, 224))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis = 0)
        result = np.round(model.predict(test_image))

        if result == 1:
            prediction = "TUMOR Detected"
            return [prediction]
        elif result == 0:
             prediction = "Patient is NORMAL"
             return [prediction]
