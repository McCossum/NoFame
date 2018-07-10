function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

// Holds all the names to remove
function replaceText(v) {
    v = v.replace(/\bAndrew Philip Kehoe\b/g, "a monster");
    v = v.replace(/\bKehoe, Andrew Philip\b/g, "a monster");
    v = v.replace(/\bSeung-Hui Cho\b/g, "a monster");
    v = v.replace(/\bCho, Seung-Hui\b/g, "a monster");
    v = v.replace(/\bAdam Peter Lanza\b/g, "a monster");
    v = v.replace(/\bLanza, Adam Peter\b/g, "a monster");
    v = v.replace(/\bNikolas Jacob Cruz\b/g, "a monster");
    v = v.replace(/\bCruz, Nikolas Jacob\b/g, "a monster");
    v = v.replace(/\bThomas Watt Hamilton\b/g, "a monster");
    v = v.replace(/\bHamilton, Thomas Watt\b/g, "a monster");
    v = v.replace(/\bRobert Steinhäuser\b/g, "a monster");
    v = v.replace(/\bSteinhäuser, Robert\b/g, "a monster");
    v = v.replace(/\bCharles Joseph Whitman\b/g, "a monster");
    v = v.replace(/\bWhitman, Charles Joseph\b/g, "a monster");
    v = v.replace(/\bTim Kretschmer\b/g, "a monster");
    v = v.replace(/\bKretschmer, Tim\b/g, "a monster");
    v = v.replace(/\bMarc Lépine\b/g, "a monster");
    v = v.replace(/\bLépine, Marc\b/g, "a monster");
    v = v.replace(/\bEric David Harris\b/g, "a monster");
    v = v.replace(/\bHarris, Eric David\b/g, "a monster");
    v = v.replace(/\bWellington Menezes de Oliveira\b/g, "a monster");
    v = v.replace(/\bMenezes de Oliveira, Wellington\b/g, "a monster");
    v = v.replace(/\bFarda Gadirov\b/g, "a monster");
    v = v.replace(/\bGadirov, Farda\b/g, "a monster");
    v = v.replace(/\bBai Ningyang\b/g, "a monster");
    v = v.replace(/\bWilli Walter Seifert\b/g, "a monster");
    v = v.replace(/\bSeifert, Willi Walter\b/g, "a monster");
    v = v.replace(/\bDimitrios Pagourtzis\b/g, "a monster");
    v = v.replace(/\bPagourtzis\b/g, "a monster");
    v = v.replace(/\bPagourtzis, Dimitrios\b/g, "a monster");
    v = v.replace(/\bMatti Juhani Saari\b/g, "a monster");
    v = v.replace(/\bSaari, Matti Juhani\b/g, "a monster");
    v = v.replace(/\bWu Huanming\b/g, "a monster");
    v = v.replace(/\bZhao Moumou\b/g, "a monster");
    v = v.replace(/\bChristopher Sean Harper-Mercer\b/g, "a monster");
    v = v.replace(/\bHarper-Mercer, Christopher Sean\b/g, "a monster");
    v = v.replace(/\bJeffrey James Weise\b/g, "a monster");
    v = v.replace(/\bWeise, Jeffrey James\b/g, "a monster");
    v = v.replace(/\bYan Yanming\b/g, "a monster");
    v = v.replace(/\bMamoru Takuma\b/g, "a monster");
    v = v.replace(/\bTakuma, Mamoru\b/g, "a monster");
    v = v.replace(/\bAla Hisham Abu Dheim\b/g, "a monster");
    v = v.replace(/\bZheng Minsheng\b/g, "a monster");
    v = v.replace(/\bPekka-Eric Auvinen\b/g, "a monster");
    v = v.replace(/\bAuvinen, Pekka-Eric\b/g, "a monster");
    v = v.replace(/\bPekka-Eric\b/g, "a monster");
    v = v.replace(/\bU Win-maung\b/g, "a monster");
    v = v.replace(/\bWang Xiangjun\b/g, "a monster");
    v = v.replace(/\bOne L. Goh\b/g, "a monster");
    v = v.replace(/\bGoh, One L.\b/g, "a monster");
    v = v.replace(/\bLee Chi Hang\b/g, "a monster");
    v = v.replace(/\bMohammed Ahmad Misleh al-Nazari\b/g, "a monster");
    v = v.replace(/\bBranimir Donchev\b/g, "a monster");
    v = v.replace(/\bDonchev, Branimir\b/g, "a monster");
    v = v.replace(/\bAnatoly\b/g, "a monster");
    v = v.replace(/\bFedorenko, Anatoly\b/g, "a monster");
    v = v.replace(/\bSergei Lepnev\b/g, "a monster");
    v = v.replace(/\bLepnev, Sergei\b/g, "a monster");
    v = v.replace(/\bPatrick Edward Purdy\b/g, "a monster");
    v = v.replace(/\bPurdy, Patrick Edward\b/g, "a monster");
    v = v.replace(/\bMohammed Fathi Farhat\b/g, "a monster");
    v = v.replace(/\bSteven Phillip Kazmierczak\b/g, "a monster");
    v = v.replace(/\bKazmierczak, Steven Phillip\b/g, "a monster");
    v = v.replace(/\bKarel Charva\b/g, "a monster");
    v = v.replace(/\bCharva, Karel\b/g, "a monster");
    v = v.replace(/\bAndrew Douglas Golden\b/g, "a monster");
    v = v.replace(/\bGolden, Andrew Douglas\b/g, "a monster");
    v = v.replace(/\bCharles Carl Roberts\b/g, "a monster");
    v = v.replace(/\bRoberts, Charles Carl\b/g, "a monster");
    v = v.replace(/\bKipland Philip Kinkel\b/g, "a monster");
    v = v.replace(/\bKinkel, Kipland Philip\b/g, "a monster");
    v = v.replace(/\bHeinz Jakob Friedrich Ernst Schmidt\b/g, "a monster");
    v = v.replace(/\bSchmidt, Heinz Jakob Friedrich Ernst\b/g, "a monster");
    v = v.replace(/\bLiu Hongwen\b/g, "a monster");
    v = v.replace(/\bKim De Gelder\b/g, "a monster");
    v = v.replace(/\bDe Gelder, Kim\b/g, "a monster");
    v = v.replace(/\bEric Christopher Houston\b/g, "a monster");
    v = v.replace(/\bHouston, Eric Christopher\b/g, "a monster");
    v = v.replace(/\bFang Jiantang\b/g, "a monster");
    v = v.replace(/\bWu Yechang\b/g, "a monster");
    v = v.replace(/\bAnthony F. Barbaro\b/g, "a monster");
    v = v.replace(/\bBarbaro, Anthony F.\b/g, "a monster");
    v = v.replace(/\bStanislaw Lawrynowicz\b/g, "a monster");
    v = v.replace(/\bLawrynowicz, Stanislaw\b/g, "a monster");
    v = v.replace(/\bLu Xiaoxi\b/g, "a monster");
    v = v.replace(/\bGabe Parker\b/g, "a monster");
    v = v.replace(/\bParker, Gabe\b/g, "a monster");
    v = v.replace(/\bRobert Kausler\b/g, "a monster");
    v = v.replace(/\bKausler, Robert\b/g, "a monster");
    v = v.replace(/\bMichael Peter Slobodian\b/g, "a monster");
    v = v.replace(/\bSlobodian, Michael Peter\b/g, "a monster");
    v = v.replace(/\bCharles Andrew Williams\b/g, "a monster");
    v = v.replace(/\bWilliams, Charles Andrew\b/g, "a monster");
    v = v.replace(/\bStephen Paddock\b/g, "a monster");
    v = v.replace(/\bOmar Mateen\b/g, "a monster");
    v = v.replace(/\bAdam Lanza\b/g, "a monster");
    v = v.replace(/\bDevin Patrick Kelley\b/g, "a monster");
    v = v.replace(/\bGeorges Pierre Hennard\b/g, "a monster");
    v = v.replace(/\bGeorges Hennard\b/g, "a monster");
    v = v.replace(/\bJames Huberty\b/g, "a monster");
    v = v.replace(/\bCharles Whitman\b/g, "a monster");
    v = v.replace(/\bnikolas cruz\b/g, "a monster");
    v = v.replace(/\bNikolas Cruz\b/g, "a monster");
    v = v.replace(/\bRizwan Farook\b/g, "a monster");
    v = v.replace(/\bTashfeen Malik\b/g, "a monster");
    v = v.replace(/\bPatrick Sherrill\b/g, "a monster");
    v = v.replace(/\bEric Harris\b/g, "a monster");
    v = v.replace(/\bDylan Klebold\b/g, "a monster");
    v = v.replace(/\bDylan Bennet Klebold\b/g, "a monster");
    v = v.replace(/\bJiverly Antares Wong\b/g, "a monster");
    v = v.replace(/\bJiverly Voong\b/g, "a monster");
    v = v.replace(/\bNidal Hasan\b/g, "a monster");
    v = v.replace(/\bNidal Malik Hasan\b/g, "a monster");
    v = v.replace(/\bHoward Unruh\b/g, "a monster");
    v = v.replace(/\bHoward Barton Unruh\b/g, "a monster");
    v = v.replace(/\bGeorge Banks\b/g, "a monster");
    v = v.replace(/\bGeorge Emil Banks\b/g, "a monster");
    v = v.replace(/\bKwan Fai "Willie" Mak\b/g, "a monster");
    v = v.replace(/\bWai-Chiu "Tony" Ng\b/g, "a monster");
    v = v.replace(/\bBenjamin Ng\b/g, "a monster");
    v = v.replace(/\bAaron Alexis\b/g, "a monster");
    v = v.replace(/\bJames Holmes\b/g, "a monster");
    v = v.replace(/\bJames Eagan Holmes\b/g, "a monster");
    v = v.replace(/\bJames Ruppert\b/g, "a monster");
    v = v.replace(/\bJames Urban Ruppert\b/g, "a monster");
    v = v.replace(/\bMichael Kenneth McLendon\b/g, "a monster");
    v = v.replace(/\bChristopher Thomas\b/g, "a monster");
    v = v.replace(/\bJames Edward Pough\b/g, "a monster");
    v = v.replace(/\bJames Edward "Pop" Pough\b/g, "a monster");
    v = v.replace(/\bJames Pough\b/g, "a monster");
    v = v.replace(/\bMark O. Barton\b/g, "a monster");
    v = v.replace(/\bMark Orrin Barton\b/g, "a monster");
    v = v.replace(/\bMark Barton\b/g, "a monster");
    v = v.replace(/\bJeff Weise\b/g, "a monster");
    v = v.replace(/\bJeffrey Weise\b/g, "a monster");
    v = v.replace(/\bChris Harper-Mercer\b/g, "a monster");
    v = v.replace(/\bHarper-Mercer\b/g, "a monster");
    v = v.replace(/\bAnthony Barbaro\b/g, "a monster");

    return v;
}

// Returns true if a node should *not* be altered in any way
function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
    (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
    (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                     node.tagName.toLowerCase() == "input"));
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i, node;
    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isForbiddenNode(node)) {
                // Should never operate on user-editable content
                continue;
            } else if (node.nodeType === 3) {
                // Replace the text for text nodes
                handleText(node);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(node);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
