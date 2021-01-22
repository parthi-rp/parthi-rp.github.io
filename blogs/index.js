               
i = 1;

questions = {
   1: 'சரியான விடையினை தேர்வு செய்க:',
   2: 'ஆசிரியப்பாவின் ஈற்றுச்சீர் ________ முடிவது சிறப்பு:'
}
answers = {
   
   1: ['Internet - மின் இதழ்', 'Search - மின் நூல்', 'E-Journal - இணையம்', 'E-Book - தேடுபொறி'],
   2: ['ஆகாரத்தில்', 'ஏகாரத்தில்', 'ஓகாரத்தில்', 'ஈகாரத்தில்']
}

var[choice1, choice2, choice3, choice4] = answers[i];

document.write(`a.${choice1}`);
document.write("\n")
document.write(`b.${choice2}`);
