from src.animeGAN.engine import Engine
from src.animeGAN.animegan import AnimeGAN


def process_image(imagePath, outputPath, animeganModelPath):
    try:
        animegan = AnimeGAN(animeganModelPath)
        engine = Engine(image_path=imagePath, image_output_path=outputPath, show=False, output_extension='anime',
                        custom_objects=[animegan])
        engine.run()
    except Exception as e:
        print("Error occured : " + str(e))
        return False

    return True
