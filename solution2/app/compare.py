from collections import deque
class Compare:
    def version(self, version_one: float, version_two: float):
         
        #create a list by spliting each version with operator
        
        version_one = str(version_one).split('.')
        version_two = str(version_two).split('.')

        #  to match the length for short value filling with 0 to match the length
        lengthDifference = abs(len(version_one)-len(version_two))
        if len(version_one) < len(version_two):
            version_one += ['0'] * lengthDifference
        elif len(version_two) < len(version_one):
            version_two += ['0'] * lengthDifference


        #   join the list back together
        for i in range(len(version_one)):
            version_one[i] = int(version_one[i])
            version_one[i] = str(version_one[i])
            version_two[i] = int(version_two[i])
            version_two[i] = str(version_two[i])   
            
        version_one = ''.join(version_one)
        version_two = ''.join(version_two)

        #   compare the numbers
        if int(version_one) < int(version_two):
            return -1
        elif int(version_one) > int(version_two):
            return 1
        else:
            return 0


