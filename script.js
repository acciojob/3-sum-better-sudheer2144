function threeSum(arr, target) {
// write your code here
	let len=arr.length;
	let diff=9999999999999;
    let res=0;
	for(let i=0;i<len-2;i++){
		for(let j=i+1;j<len-1;j++){
			for(let k=j+1;k<len;k++){            
                let sum=arr[i]+arr[j]+arr[k];
                let currDiff=0;
                if(sum==target){
                    return sum;
                }
				if(sum>target){
                    currDiff=sum-target
                }
                else if(sum<target){
                    currDiff=target-sum
                }
                if(currDiff<diff){
                    diff=currDiff;
                    res=sum;
                }
			}
		}
	}
  return res;
}

module.exports = threeSum;
