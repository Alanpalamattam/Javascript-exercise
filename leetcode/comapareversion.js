var compareVersion = function(version1, version2) {
            version1 = version1.split('.');
    version2 = version2.split('.');
    console.log(version1,version2)
    let length = Math.max(version1.length, version2.length);

    for (let i = 0; i < length; i++) {
        if ((+version1[i] || 0) < (+version2[i] || 0)) return -1;
        if ((+version1[i] || 0) > (+version2[i] || 0)) return 1;
    }

    return 0;
   }
console.log(compareVersion("1.01", "1.001"));