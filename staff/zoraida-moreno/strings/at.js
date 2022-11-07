function at(s, index = 0) {
    if (index < 0) {

        return s[s.length + index];  //var newIndex = s.length + index
    }
    return s[index];
}
