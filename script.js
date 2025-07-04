// Game Data - Abundance Phrases
const ABUNDANCE_PHRASES = {
  1: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
  2: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
  3: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
  4: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
  5: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
  6: "¿Qué es el dinero para ti... y de quién aprendiste eso?",
  7: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
  8: "¿Qué me impide reconocer que ya soy una energía de riqueza?",
  9: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
  10: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
  11: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
  12: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
  13: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
  14: "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
  15: "¿Qué pasaría si dejara de rechazar ser rica?",
  16: "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
  17: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
  18: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
  19: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
  20: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
  21: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
  22: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
  23: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
  24: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
  25: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
  26: "¿Qué me impide ser el imán que realmente soy para el dinero?",
  27: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
  28: "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
  29: "¿Qué riqueza energética está disponible para mí ahora mismo?",
  30: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?"
};


// Challenges for each space
const ABUNDANCE_CHALLENGES = {
1: "Escribe 3 cualidades positivas que tienes y cómo pueden generar abundancia",
2: "Identifica un problema actual y encuentra 2 oportunidades ocultas en él",
3: "Haz una lista de 5 cosas abundantes en tu vida que das por sentado",
4: "Escribe una carta de amor al dinero como si fuera tu pareja ideal",
5: "Anota 10 cosas por las que sientes gratitud financiera hoy",
6: "Planifica una actividad placentera que puedas disfrutar sin culpa",
7: "Define tu valor único en 3 frases y cómo se refleja en tus ingresos",
8: "Medita 5 minutos visualizando el dinero fluyendo hacia ti naturalmente",
9: "Identifica 3 creencias limitantes sobre el dinero y cuestiónales",
10: "Celebra un logro financiero reciente, por pequeño que sea",
11: "Practica recibir: acepta un cumplido, un favor o una invitación",
12: "Escribe 5 formas en que puedes valorar más tu capacidad de generar dinero",
13: "Crea una afirmación personal de abundancia y repítela 10 veces",
14: "Actúa como si el dinero fuera abundante: compra algo que realmente desees",
15: "Revisa tus gastos del mes y agradece cada inversión hecha conscientemente",
16: "Dedica 30 minutos a un proyecto creativo que te apasione",
17: "Investiga una forma nueva de contribuir al mundo y recibir por ello",
18: "Suelta el control: permite que alguien más pague la cuenta hoy",
19: "Haz algo que eleve tu autoestima y observa cómo afecta tu relación con el dinero",
20: "Identifica un límite financiero y toma una acción pequeña para trascenderlo",
21: "Trata tu dinero con amor: organiza tu billetera y cuentas con cariño",
22: "Toma una decisión financiera guiándote por tu intuición, no por el miedo",
23: "Sé generoso contigo mismo: cómprate algo especial sin justificarte",
24: "Comparte algo de valor con alguien sin esperar nada a cambio",
25: "Visualiza y planifica cómo quieres que sea tu relación con el dinero en 1 año",
26: "Haz una lista de todas las formas en que la abundancia se manifiesta en tu vida",
27: "Ayuda a alguien financieramente o comparte un recurso valioso",
28: "Practica recibir abundancia: pide ayuda o acepta una oportunidad",
29: "Actúa como el imán de abundancia que eres: irradia confianza y gratitud",
30: "Celebra tu viaje y compromete con seguir creciendo en abundancia"
};

// Space colors for the board
const SPACE_COLORS = [
"space-emerald",
"space-blue", 
"space-purple",
"space-amber",
"space-rose",
"space-indigo"
];

// Challenge card colors
const CHALLENGE_COLORS = [
"challenge-emerald",
"challenge-blue", 
"challenge-purple",
"challenge-amber",
"challenge-rose",
"challenge-indigo"
];

// Game State Management
class AbundanceGame {
constructor() {
  this.gameState = this.loadGameState();
  this.diceValue = 1;
  this.isRolling = false;
  this.isMoving = false;
  
  this.initializeDOM();
  this.initializeEventListeners();
  this.updateUI();
  this.startCooldownTimer();
}

loadGameState() {
  try {
    const saved = localStorage.getItem('abundanceGameState');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error loading game state:', error);
  }
  
  return {
    currentPosition: 0,
    dayCount: 0,
    lastPlayDate: null,
    history: [],
    isGameComplete: false,
    totalRolls: 0
  };
}

saveGameState() {
  try {
    localStorage.setItem('abundanceGameState', JSON.stringify(this.gameState));
  } catch (error) {
    console.error('Error saving game state:', error);
  }
}

canPlay() {
  if (!this.gameState.lastPlayDate) return true;
  
  const lastPlay = new Date(this.gameState.lastPlayDate);
  const now = new Date();
  const timeDiff = now.getTime() - lastPlay.getTime();
  const hoursDiff = timeDiff / (1000 * 3600);
  
  return hoursDiff >= 24;
}

getTimeUntilNextPlay() {
  if (!this.gameState.lastPlayDate || this.canPlay()) return "";
  
  const lastPlay = new Date(this.gameState.lastPlayDate);
  const nextPlay = new Date(lastPlay.getTime() + (24 * 60 * 60 * 1000));
  const now = new Date();
  const timeDiff = nextPlay.getTime() - now.getTime();
  
  const hours = Math.floor(timeDiff / (1000 * 3600));
  const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
}

rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

calculateNewPosition(currentPosition, diceRoll) {
  const newPosition = currentPosition + diceRoll;
  return newPosition > 30 ? 30 : newPosition;
}

getSpaceColor(position) {
  const folderData = this.getFolderData();
  const folder = folderData.find(f => f.positions.includes(position));
  return folder ? folder.color : 'space-emerald';
}

getSpacePhrase(position) {
  return ABUNDANCE_PHRASES[position] || "Reflexiona sobre tu relación con la abundancia";
}

getSpaceChallenge(position) {
  return ABUNDANCE_CHALLENGES[position] || "Reflexiona profundamente sobre esta etapa de tu viaje";
}

getChallengeColor(position) {
  return CHALLENGE_COLORS[position % CHALLENGE_COLORS.length];
}

getDiceFace(value) {
  const faces = {
    1: [["", "", ""], ["", "●", ""], ["", "", ""]],
    2: [["●", "", ""], ["", "", ""], ["", "", "●"]],
    3: [["●", "", ""], ["", "●", ""], ["", "", "●"]],
    4: [["●", "", "●"], ["", "", ""], ["●", "", "●"]],
    5: [["●", "", "●"], ["", "●", ""], ["●", "", "●"]],
    6: [["●", "", "●"], ["●", "", "●"], ["●", "", "●"]]
  };
  return faces[value] || faces[1];
}

initializeDOM() {
  this.elements = {
    dayCounter: document.getElementById('dayCounter'),
    gameBoard: document.getElementById('gameBoard'),
    dice: document.getElementById('dice'),
    diceDots: document.getElementById('diceDots'),
    rollButton: document.getElementById('rollButton'),
    cooldownTimer: document.getElementById('cooldownTimer'),
    cooldownText: document.getElementById('cooldownText'),
    currentPhrase: document.getElementById('currentPhrase'),
    phraseInfo: document.getElementById('phraseInfo'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    daysPlayed: document.getElementById('daysPlayed'),
    diceRolled: document.getElementById('diceRolled'),
    historyModal: document.getElementById('historyModal'),
    historyContent: document.getElementById('historyContent'),
    completionModal: document.getElementById('completionModal'),
    toastContainer: document.getElementById('toastContainer'),
    challengeFolders: document.getElementById('challengeFolders'),
    currentChallenge: document.getElementById('currentChallenge'),
    challengeInfo: document.getElementById('challengeInfo')
  };

  // Create board spaces and challenge folders
  this.createBoard();
  this.createChallengeFolders();
  this.updateDice();
}

getFolderData() {
  return [
    { name: 'Esmeralda', color: 'space-emerald', positions: [6, 12, 18, 24, 30], level: 'Nivel 1 - Fundamentos' },
    { name: 'Azul', color: 'space-blue', positions: [1, 7, 13, 19, 25], level: 'Nivel 2 - Conciencia' },
    { name: 'Púrpura', color: 'space-purple', positions: [2, 8, 14, 20, 26], level: 'Nivel 3 - Transformación' },
    { name: 'Ámbar', color: 'space-amber', positions: [3, 9, 15, 21, 27], level: 'Nivel 4 - Manifestación' },
    { name: 'Rosa', color: 'space-rose', positions: [4, 10, 16, 22, 28], level: 'Nivel 5 - Integración' },
    { name: 'Índigo', color: 'space-indigo', positions: [5, 11, 17, 23, 29], level: 'Nivel 6 - Maestría' }
  ];
}

createBoard() {
  this.elements.gameBoard.innerHTML = '';
  
  for (let i = 1; i <= 30; i++) {
    const space = document.createElement('div');
    space.className = `board-space ${this.getSpaceColor(i)} ${i === 30 ? 'space-goal' : ''}`;
    space.dataset.position = i;
    
    const number = document.createElement('div');
    number.className = 'board-space-number';
    number.textContent = i;
    space.appendChild(number);
    
    if (i === 1) {
      const label = document.createElement('div');
      label.className = 'board-space-label';
      label.textContent = 'Inicio';
      space.appendChild(label);
    } else if (i === 30) {
      const label = document.createElement('div');
      label.className = 'board-space-label';
      label.textContent = '¡Meta!';
      space.appendChild(label);
    }
    
    this.elements.gameBoard.appendChild(space);
  }
}

createChallengeFolders() {
  this.elements.challengeFolders.innerHTML = '';
  
  const folderData = this.getFolderData();
  
  folderData.forEach(folder => {
    const folderElement = document.createElement('div');
    folderElement.className = `challenge-folder ${folder.color}`;
    
    // Create folder header
    const folderHeader = document.createElement('div');
    folderHeader.className = 'challenge-folder-header';
    
    const folderTitle = document.createElement('div');
    folderTitle.className = 'challenge-folder-title';
    
    const folderIcon = document.createElement('div');
    folderIcon.className = 'challenge-folder-icon';
    folderIcon.textContent = '📁';
    
    const folderName = document.createElement('div');
    folderName.className = 'challenge-folder-name';
    
    const folderMainTitle = document.createElement('div');
    folderMainTitle.className = 'challenge-folder-main-title';
    folderMainTitle.textContent = `Retos ${folder.name}`;
    
    const folderLevel = document.createElement('div');
    folderLevel.className = 'challenge-folder-level';
    folderLevel.textContent = folder.level;
    
    folderName.appendChild(folderMainTitle);
    folderName.appendChild(folderLevel);
    
    folderTitle.appendChild(folderIcon);
    folderTitle.appendChild(folderName);
    
    const folderCount = document.createElement('div');
    folderCount.className = 'challenge-folder-count';
    
    const availableCount = folder.positions.filter(pos => pos <= this.gameState.currentPosition).length;
    folderCount.innerHTML = `
      <span>${availableCount}/${folder.positions.length}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="challenge-folder-toggle">
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    `;
    
    folderHeader.appendChild(folderTitle);
    folderHeader.appendChild(folderCount);
    
    // Create folder content
    const folderContent = document.createElement('div');
    folderContent.className = 'challenge-folder-content';
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'challenge-cards-container';
    
    // Create cards for this folder
    folder.positions.forEach(position => {
      const card = this.createChallengeCard(position);
      cardsContainer.appendChild(card);
    });
    
    folderContent.appendChild(cardsContainer);
    
    // Add click handler to toggle folder
    folderHeader.addEventListener('click', () => {
      folderElement.classList.toggle('expanded');
    });
    
    folderElement.appendChild(folderHeader);
    folderElement.appendChild(folderContent);
    
    this.elements.challengeFolders.appendChild(folderElement);
  });
}

createChallengeCard(position) {
  const card = document.createElement('div');
  card.className = `challenge-card ${this.getSpaceColor(position)}`;
  card.dataset.position = position;
  
  const cardHeader = document.createElement('div');
  cardHeader.className = 'challenge-header';
  
  const cardNumber = document.createElement('div');
  cardNumber.className = 'challenge-number';
  cardNumber.textContent = position;
  
  const cardTitle = document.createElement('div');
  cardTitle.className = 'challenge-title';
  cardTitle.textContent = 'Reto del Día';
  
  cardHeader.appendChild(cardNumber);
  cardHeader.appendChild(cardTitle);
  
  const cardContent = document.createElement('div');
  cardContent.className = 'challenge-content';
  cardContent.textContent = this.getSpaceChallenge(position);
  

  
  const cardStatus = document.createElement('div');
  cardStatus.className = 'challenge-status';
  
  // Only show the card if it's the exact current position
  if (position === this.gameState.currentPosition) {
    cardStatus.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 12l2 2 4-4"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <span>Reto Actual</span>
    `;
    cardStatus.classList.add('current');
    card.classList.add('current');
  } else {
    // Hide all other cards
    card.classList.add('hidden');
  }
  
  card.appendChild(cardHeader);
  card.appendChild(cardContent);
  card.appendChild(cardStatus);
  
  return card;
}

highlightCurrentChallenge() {
  // Hide all cards first
  document.querySelectorAll('.challenge-card').forEach(card => {
    card.classList.add('hidden');
    card.classList.remove('current', 'current-challenge');
    card.style.animation = '';
  });
  
  // Find which folder contains the current position
  const currentPosition = this.gameState.currentPosition;
  const folderData = this.getFolderData();

  const targetFolder = folderData.find(folder => 
    folder.positions.includes(currentPosition)
  );

  if (targetFolder) {
    // Find the folder element
    const folderElement = document.querySelector(
      `.challenge-folder.${targetFolder.color}`
    );
    
    if (folderElement) {
      // Expand the folder
      folderElement.classList.add('expanded');
      
      // Find and show only the specific card for current position
      setTimeout(() => {
        const targetCard = folderElement.querySelector(
          `[data-position="${currentPosition}"]`
        );
        
        if (targetCard) {
          // Show and highlight the current card
          targetCard.classList.remove('hidden');
          targetCard.classList.add('current', 'current-challenge');
          
          // Update the card status
          const cardStatus = targetCard.querySelector('.challenge-status');
          if (cardStatus) {
            cardStatus.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span>Reto Actual</span>
            `;
            cardStatus.classList.add('current');
          }
          
          // Scroll card into view
          targetCard.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
          
          // Add bounce animation
          targetCard.style.animation = 'challengeBounce 1s ease-in-out 2';
          
          // Show toast notification
          this.showToast(
            `¡Reto del día ${currentPosition}!`, 
            `Tu nuevo reto está en la carpeta ${targetFolder.name}`,
            'success'
          );
        }
      }, 300); // Wait for folder expansion animation
    }
  }
}

updateDice() {
  const diceFace = this.getDiceFace(this.diceValue);
  this.elements.diceDots.innerHTML = '';
  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const dot = document.createElement('div');
      if (diceFace[row][col] === '●') {
        dot.className = 'dice-dot';
      }
      this.elements.diceDots.appendChild(dot);
    }
  }
}

updatePlayerPosition() {
  // Remove all existing player pieces
  document.querySelectorAll('.player-piece').forEach(piece => piece.remove());
  
  if (this.gameState.currentPosition > 0) {
    const currentSpace = document.querySelector(`[data-position="${this.gameState.currentPosition}"]`);
    if (currentSpace) {
      const piece = document.createElement('div');
      piece.className = 'player-piece';
      piece.textContent = '♦';
      currentSpace.appendChild(piece);
      currentSpace.classList.add('current-position');
    }
  }
}

updateUI() {
  // Update day counter
  this.elements.dayCounter.textContent = this.gameState.dayCount;
  
  // Update current phrase
  if (this.gameState.currentPosition > 0) {
    this.elements.currentPhrase.textContent = this.getSpacePhrase(this.gameState.currentPosition);
    this.elements.phraseInfo.textContent = `Casilla ${this.gameState.currentPosition} • Día ${this.gameState.dayCount} del recorrido`;
    
    // Update current challenge
    this.elements.currentChallenge.textContent = this.getSpaceChallenge(this.gameState.currentPosition);
    this.elements.challengeInfo.textContent = `Reto del día ${this.gameState.dayCount}`;
  } else {
    this.elements.currentPhrase.textContent = "Comienza tu viaje lanzando el dado";
    this.elements.phraseInfo.textContent = "Casilla 0 • Día 0 del recorrido";
    this.elements.currentChallenge.textContent = "Prepárate para comenzar tu transformación hacia la abundancia";
    this.elements.challengeInfo.textContent = "Reto del día 0";
  }
  
  // Update progress
  const progress = (this.gameState.currentPosition / 30) * 100;
  this.elements.progressFill.style.width = `${progress}%`;
  this.elements.progressText.textContent = `${this.gameState.currentPosition}/30 casillas`;
  
  // Update stats
  this.elements.daysPlayed.textContent = this.gameState.dayCount;
  this.elements.diceRolled.textContent = this.gameState.totalRolls;
  
  // Update player position
  this.updatePlayerPosition();
  
  // Update challenge folders
  this.createChallengeFolders();
  
  // Highlight current challenge if position > 0
  if (this.gameState.currentPosition > 0) {
    this.highlightCurrentChallenge();
  }
  

  
  // Update roll button state
  this.updateRollButtonState();
}




updateRollButtonState() {
  const canPlay = this.canPlay();
  this.elements.rollButton.disabled = !canPlay;
  
  if (canPlay) {
    this.elements.rollButton.textContent = 'Lanzar Dado';
    this.elements.cooldownTimer.style.display = 'none';
  } else {
    this.elements.rollButton.textContent = 'Esperando...';
    this.elements.cooldownTimer.style.display = 'flex';
  }
}

startCooldownTimer() {
  const updateTimer = () => {
    const timeLeft = this.getTimeUntilNextPlay();
    if (timeLeft) {
      this.elements.cooldownText.textContent = `Próxima jugada en: ${timeLeft}`;
    } else {
      this.updateRollButtonState();
    }
  };
  
  updateTimer();
  setInterval(updateTimer, 60000); // Update every minute
}

initializeEventListeners() {
  // Roll dice button
  this.elements.rollButton.addEventListener('click', () => {
    if (!this.canPlay() || this.isRolling || this.isMoving) return;
    this.playTurn();
  });
  
  // Dice click
  this.elements.dice.addEventListener('click', () => {
    if (!this.canPlay() || this.isRolling || this.isMoving) return;
    this.playTurn();
  });
  
  // History button
  document.getElementById('historyButton').addEventListener('click', () => {
    this.showHistory();
  });
  
  // Reset button
  document.getElementById('resetButton').addEventListener('click', () => {
    this.resetGame();
  });
  
  // Modal close buttons
  document.getElementById('closeHistoryModal').addEventListener('click', () => {
    this.elements.historyModal.classList.remove('show');
  });
  
  // Completion modal buttons
  document.getElementById('newCycleButton').addEventListener('click', () => {
    this.resetGame();
    this.elements.completionModal.classList.remove('show');
  });
  
  document.getElementById('continueButton').addEventListener('click', () => {
    this.elements.completionModal.classList.remove('show');
  });
  
  // Close modals when clicking outside
  [this.elements.historyModal, this.elements.completionModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
  


}

async playTurn() {
  if (!this.canPlay() || this.isRolling || this.isMoving) return;
  
  this.isRolling = true;
  this.elements.dice.classList.add('rolling');
  this.elements.rollButton.disabled = true;
  
  // Roll dice animation
  await this.animateDiceRoll();
  
  // Update game state
  const oldPosition = this.gameState.currentPosition;
  this.gameState.currentPosition = this.calculateNewPosition(oldPosition, this.diceValue);
  this.gameState.dayCount++;
  this.gameState.lastPlayDate = new Date().toISOString();
  this.gameState.totalRolls++;
  
  // Add to history
  this.gameState.history.push({
    date: new Date().toISOString(),
    position: this.gameState.currentPosition,
    diceRoll: this.diceValue,
    phrase: this.getSpacePhrase(this.gameState.currentPosition),
    challenge: this.getSpaceChallenge(this.gameState.currentPosition)
  });
  
  // Animate piece movement
  if (oldPosition !== this.gameState.currentPosition) {
    await this.animatePieceMovement(oldPosition, this.gameState.currentPosition);
  }
  
  // Check if game is complete
  if (this.gameState.currentPosition >= 30) {
    this.gameState.isGameComplete = true;
    this.showCompletionModal();
  }
  
  // Save state and update UI
  this.saveGameState();
  this.updateUI();
  
  // Show success toast
  this.showToast(`¡Avanzaste a la casilla ${this.gameState.currentPosition}!`, 'success');
  
  this.isRolling = false;
  this.elements.dice.classList.remove('rolling');
}

animateDiceRoll() {
  return new Promise(resolve => {
    let rollCount = 0;
    const maxRolls = 8;
    
    const rollInterval = setInterval(() => {
      this.diceValue = this.rollDice();
      this.updateDice();
      rollCount++;
      
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        resolve();
      }
    }, 100);
  });
}

animatePieceMovement(oldPosition, newPosition) {
  return new Promise(resolve => {
    this.isMoving = true;
    
    // Add moving class for animation
    const piece = document.querySelector('.player-piece');
    if (piece) {
      piece.classList.add('moving');
    }
    
    setTimeout(() => {
      this.isMoving = false;
      resolve();
    }, 600);
  });
}

showHistory() {
  if (this.gameState.history.length === 0) {
    this.elements.historyContent.innerHTML = '<p>Aún no tienes historial de jugadas.</p>';
  } else {
    this.elements.historyContent.innerHTML = '';
    
    this.gameState.history.slice().reverse().forEach(entry => {
      const historyEntry = document.createElement('div');
      historyEntry.className = 'history-entry';
      
      const date = new Date(entry.date);
      const formattedDate = date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      historyEntry.innerHTML = `
        <div class="history-entry-header">
          <div class="history-entry-title">Casilla ${entry.position}</div>
          <div class="history-entry-date">${formattedDate}</div>
        </div>
        <div class="history-entry-content">
          <p><strong>Dado:</strong> ${entry.diceRoll}</p>
          <p><strong>Reflexión:</strong> ${entry.phrase}</p>
          <p><strong>Reto:</strong> ${entry.challenge}</p>
        </div>
      `;
      
      this.elements.historyContent.appendChild(historyEntry);
    });
  }
  
  this.elements.historyModal.classList.add('show');
}

showCompletionModal() {
  this.elements.completionModal.classList.add('show');
}

resetGame() {
  if (confirm('¿Estás seguro de que quieres reiniciar tu progreso?')) {
    this.gameState = {
      currentPosition: 0,
      dayCount: 0,
      lastPlayDate: null,
      history: [],
      isGameComplete: false,
      totalRolls: 0
    };
    
    this.saveGameState();
    this.updateUI();
    this.showToast('Juego reiniciado', 'success');
  }
}

showToast(title, description = '', type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  if (description) {
    toast.innerHTML = `
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
      </div>
    `;
  } else {
    toast.innerHTML = `
      <div class="toast-content">${title}</div>
    `;
  }
  
  this.elements.toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
new AbundanceGame();
});
