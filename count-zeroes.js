function countZeroes(arr) {
    let idxFirstZero = findFirstZero(arr)
    if (idxFirstZero === -1) return 0;

    return arr.length - idxFirstZero
}

function findFirstZero(arr, idxLow = 0, idxHigh = arr.length - 1) {
    if (idxHigh >= idxLow) {
        let idxMid = idxLow + Math.floor((idxHigh - idxLow) / 2)
        if ((idxMid === 0 || arr[idxMid - 1] === 1) && arr[idxMid] === 0) {
            return idxMid;
        } else if (arr[idxMid] === 1) {
            return findFirstZero(arr, idxMid + 1, idxHigh)
        }
        return findFirstZero(arr, idxLow, idxMid - 1)
    }
    return -1;
}

module.exports = countZeroes