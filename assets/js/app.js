let highlightCounter = 0

const words = ['experiences', "platforms", 'interfaces', 'brands', 'frameworks', 'functionality', 'applications']

$(() => {
	transitionHighlight = () => {

		$('.highlight').slideUp('fast', function() {
			$(this).text(words[highlightCounter]).slideDown()
		})

		if (highlightCounter == words.length - 1)
			highlightCounter = 0
		else
			highlightCounter++
	}

	setInterval(function () {
		transitionHighlight()
	}, 3000)
})
