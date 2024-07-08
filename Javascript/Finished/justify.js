function justify(text, width) {
    newText = text.split(' ')
    newText
    if(newText.length === 1)return text
    console.log(text)

}

console.log(justify('123 45 6', 7)) // '123  45\n6'
console.log(justify('123', 7)) // '123'
console.log(justify('', 10)) // ''

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Last line should not contain '\n'
// Strings with one word do not need gaps ('somelongword\n').