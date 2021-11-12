var mwi = {};
mwi.candidates = [];
mwi.manifest = null;
mwi.candidates.push(['Matt Johnson','Bart Paden','Ryan Doss','Jared Malcolm']);
mwi.candidates.push(['Matt Johnson','Bart Paden','Jordan Heigle','Tyler Viles']);
mwi.mergeCandidates = function(array1, array2){
    return [...new Set([...array1,...array2])];
};
mwi.generateCandidatesList = function(){
    if (mwi.manifest) {
        console.log('Thank you, but the list has already been made.')
    } else {
        mwi.manifest = mwi.mergeCandidates(mwi.candidates[0], mwi.candidates[1]);
        console.log(mwi.manifest);
    }
};

// Initialize lists:
