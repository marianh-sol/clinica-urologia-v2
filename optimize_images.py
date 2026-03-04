import os
from PIL import Image

# Configuration
IMAGE_DIR = '/home/ubuntu/clinica-urologia/client/public/images'
MAX_WIDTH = 1920
JPG_QUALITY = 80

def optimize_images(directory):
    print(f"Starting optimization in {directory}...")
    
    total_saved = 0
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                
                # Skip original backups if any
                if '_original' in file:
                    continue
                    
                try:
                    with Image.open(filepath) as img:
                        original_size = os.path.getsize(filepath)
                        
                        # Resize if too large
                        if img.width > MAX_WIDTH:
                            ratio = MAX_WIDTH / img.width
                            new_height = int(img.height * ratio)
                            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                            print(f"Resized {file} to {MAX_WIDTH}px width.")

                        # Save with optimization
                        if file.lower().endswith(('.jpg', '.jpeg')):
                            # Convert to RGB if necessary (e.g. CMYK)
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                            img.save(filepath, 'JPEG', quality=JPG_QUALITY, optimize=True)
                        elif file.lower().endswith('.png'):
                            # For PNGs, we just optimize, we don't change quality parameter directly like JPG
                            # But we can try to reduce colors if it's not a complex photo, 
                            # strictly speaking PIL's optimize=True for PNG is good enough for safe optimization.
                            img.save(filepath, 'PNG', optimize=True)
                        
                        new_size = os.path.getsize(filepath)
                        saved = original_size - new_size
                        if saved > 0:
                            total_saved += saved
                            print(f"Optimized {file}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {saved/1024:.1f}KB)")
                        else:
                            print(f"Skipped {file}: No size reduction or size increased.")
                            
                except Exception as e:
                    print(f"Error processing {file}: {e}")

    print(f"\nTotal space saved: {total_saved/1024/1024:.2f} MB")

if __name__ == "__main__":
    optimize_images(IMAGE_DIR)
