from app.compare import Compare

compare = Compare()
def test_V1isLessThenV2():
    assert compare.version(0.1, 0.2) == -1, "Should be -1"

def test_V1isGreaterThenV2():
    assert compare.version(0.2, 0.1) == 1, "Should be 1"
    
def test_V1isEqualToV2():
    assert compare.version(0.1, 0.1) == 0, "Should be 0"


  
if __name__ == "__main__":
    test_V1isLessThenV2()
    test_V1isEqualToV2()
    test_V1isGreaterThenV2()
    print("Everything passed")