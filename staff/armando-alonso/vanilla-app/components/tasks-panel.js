var homeSection = document.createElement('section')
homeSection.classList.add('cuerpo', 'cuerpo--contenedor')

var homeFirstColumn = document.createElement('article')
homeFirstColumn.classList.add('columna')

var homeSecondColumn = document.createElement('article')
homeSecondColumn.classList.add('columna')

var homeThirdColumn = document.createElement('article')
homeThirdColumn.classList.add('columna')

homeSection.append(homeFirstColumn, homeSecondColumn, homeThirdColumn)