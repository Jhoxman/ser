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
    return SPACE_COLORS[position % SPACE_COLORS.length];
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
      challengeCards: document.getElementById('challengeCards'),
      currentChallenge: document.getElementById('currentChallenge'),
      challengeInfo: document.getElementById('challengeInfo')
    };

    // Create board spaces and challenge cards
    this.createBoard();
    this.createChallengeCards();
    this.updateDice();
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

  createChallengeCards() {
    this.elements.challengeCards.innerHTML = '';
    
    for (let i = 1; i <= 30; i++) {
      const card = document.createElement('div');
      card.className = `challenge-card ${this.getChallengeColor(i)}`;
      card.dataset.position = i;
      
      const cardHeader = document.createElement('div');
      cardHeader.className = 'challenge-header';
      
      const cardNumber = document.createElement('div');
      cardNumber.className = 'challenge-number';
      cardNumber.textContent = i;
      
      const cardTitle = document.createElement('div');
      cardTitle.className = 'challenge-title';
      cardTitle.textContent = 'Reto del Día';
      
      cardHeader.appendChild(cardNumber);
      cardHeader.appendChild(cardTitle);
      
      const cardContent = document.createElement('div');
      cardContent.className = 'challenge-content';
      cardContent.textContent = this.getSpaceChallenge(i);
      
      const cardStatus = document.createElement('div');
      cardStatus.className = 'challenge-status';
      
      if (i <= this.gameState.currentPosition) {
        cardStatus.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span>Disponible</span>
        `;
        cardStatus.classList.add('available');
        card.classList.add('available');
      } else {
        cardStatus.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Bloqueado</span>
        `;
        cardStatus.classList.add('locked');
        card.classList.add('locked');
      }
      
      card.appendChild(cardHeader);
      card.appendChild(cardContent);
      card.appendChild(cardStatus);
      
      this.elements.challengeCards.appendChild(card);
    }
  }

  updateDice() {
    const diceFace = this.getDiceFace(this.diceValue);
    this.elements.diceDots.innerHTML = '';
    
    diceFace.flat().forEach(dot => {
      const dotElement = document.createElement('div');
      dotElement.className = dot === "●" ? "dice-dot" : "";
      this.elements.diceDots.appendChild(dotElement);
    });
  }

  initializeEventListeners() {
    // Roll dice button
    this.elements.rollButton.addEventListener('click', () => this.handleRollDice());
    
    // History button
    document.getElementById('historyButton').addEventListener('click', () => this.showHistory());
    
    // Reset button  
    document.getElementById('resetButton').addEventListener('click', () => this.resetGame());
    
    // Modal close buttons
    document.getElementById('closeHistoryModal').addEventListener('click', () => this.hideHistory());
    document.getElementById('newCycleButton').addEventListener('click', () => this.startNewCycle());
    document.getElementById('continueButton').addEventListener('click', () => this.hideCompletion());
    
    // Close modals when clicking outside
    this.elements.historyModal.addEventListener('click', (e) => {
      if (e.target === this.elements.historyModal) this.hideHistory();
    });
    
    this.elements.completionModal.addEventListener('click', (e) => {
      if (e.target === this.elements.completionModal) this.hideCompletion();
    });
  }

  updateUI() {
    // Update day counter
    this.elements.dayCounter.textContent = this.gameState.dayCount;
    
    // Update board - remove all current position markers first
    document.querySelectorAll('.board-space').forEach(space => {
      space.classList.remove('current-position');
      const existingPiece = space.querySelector('.player-piece');
      if (existingPiece) {
        existingPiece.remove();
      }
    });
    
    // Add current position marker
    if (this.gameState.currentPosition > 0) {
      const currentSpace = document.querySelector(`[data-position="${this.gameState.currentPosition}"]`);
      if (currentSpace) {
        currentSpace.classList.add('current-position');
        const piece = document.createElement('div');
        piece.className = 'player-piece';
        piece.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>`;
        currentSpace.appendChild(piece);
      }
    }
    
    // Update phrase
    if (this.gameState.currentPosition > 0) {
      this.elements.currentPhrase.textContent = `"${this.getSpacePhrase(this.gameState.currentPosition)}"`;
      this.elements.currentChallenge.textContent = this.getSpaceChallenge(this.gameState.currentPosition);
    } else {
      this.elements.currentPhrase.textContent = '"Comienza tu viaje lanzando el dado"';
      this.elements.currentChallenge.textContent = 'Prepárate para comenzar tu transformación hacia la abundancia';
    }
    
    this.elements.phraseInfo.textContent = `Casilla ${this.gameState.currentPosition} • Día ${this.gameState.dayCount} del recorrido`;
    this.elements.challengeInfo.textContent = `Reto del día ${this.gameState.dayCount}`;
    
    // Update progress
    const progressPercentage = (this.gameState.currentPosition / 30) * 100;
    this.elements.progressText.textContent = `${this.gameState.currentPosition}/30 casillas`;
    this.elements.progressFill.style.width = `${progressPercentage}%`;
    
    // Update stats
    this.elements.daysPlayed.textContent = this.gameState.dayCount;
    this.elements.diceRolled.textContent = this.gameState.totalRolls;
    
    // Update roll button state
    const canPlayNow = this.canPlay();
    this.elements.rollButton.disabled = !canPlayNow || this.isRolling;
    this.elements.rollButton.textContent = this.isRolling ? 'Lanzando...' : 'Lanzar Dado';
    
    // Update cooldown timer
    if (!canPlayNow) {
      this.elements.cooldownTimer.style.display = 'flex';
      this.elements.cooldownText.textContent = `Próxima jugada en: ${this.getTimeUntilNextPlay()}`;
    } else {
      this.elements.cooldownTimer.style.display = 'none';
    }
    
    // Check for game completion
    if (this.gameState.currentPosition === 30 && !this.gameState.isGameComplete) {
      this.gameState.isGameComplete = true;
      this.saveGameState();
      setTimeout(() => this.showCompletion(), 1000);
    }
  }

  startCooldownTimer() {
    setInterval(() => {
      if (!this.canPlay()) {
        this.elements.cooldownText.textContent = `Próxima jugada en: ${this.getTimeUntilNextPlay()}`;
      } else {
        this.elements.cooldownTimer.style.display = 'none';
        this.elements.rollButton.disabled = false;
      }
    }, 60000); // Update every minute
  }

  async handleRollDice() {
    if (!this.canPlay()) {
      this.showToast('Debes esperar', 'Solo puedes jugar una vez cada 24 horas', 'error');
      return;
    }

    this.isRolling = true;
    this.updateUI();
    
    // Add rolling animation
    this.elements.dice.classList.add('rolling');
    
    // Simulate dice rolling animation
    const rollAnimation = setInterval(() => {
      this.diceValue = Math.floor(Math.random() * 6) + 1;
      this.updateDice();
    }, 100);

    setTimeout(() => {
      clearInterval(rollAnimation);
      const finalRoll = this.rollDice();
      this.diceValue = finalRoll;
      this.updateDice();
      this.isRolling = false;
      this.elements.dice.classList.remove('rolling');
      
      // Move piece
      this.isMoving = true;
      const currentPiece = document.querySelector('.player-piece');
      if (currentPiece) {
        currentPiece.classList.add('moving');
      }
      
      setTimeout(() => {
        const newPosition = this.calculateNewPosition(this.gameState.currentPosition, finalRoll);
        const currentPhrase = this.getSpacePhrase(newPosition);
        const now = new Date().toISOString();
        
        const historyEntry = {
          position: newPosition,
          diceRoll: finalRoll,
          phrase: currentPhrase,
          playDate: now,
          day: this.gameState.dayCount + 1
        };

        this.gameState.currentPosition = newPosition;
        this.gameState.dayCount += 1;
        this.gameState.totalRolls += 1;
        this.gameState.lastPlayDate = now;
        this.gameState.history.push(historyEntry);
        
        this.saveGameState();
        this.isMoving = false;
        this.updateUI();
        this.createChallengeCards();

        this.showToast(
          `¡Avanzaste ${finalRoll} casillas!`,
          `Llegaste a la casilla ${newPosition}`,
          'success'
        );
      }, 600);
    }, 800);
  }

  resetGame() {
    if (confirm('¿Estás seguro de que quieres reiniciar el juego? Se perderá todo el progreso.')) {
      this.gameState = {
        currentPosition: 0,
        dayCount: 0,
        lastPlayDate: null,
        history: [],
        isGameComplete: false,
        totalRolls: 0
      };
      
      this.diceValue = 1;
      this.saveGameState();
      this.updateUI();
      this.updateDice();
      this.createChallengeCards();
      this.hideCompletion();
      
      this.showToast(
        'Juego reiniciado',
        '¡Comienza un nuevo viaje de abundancia!',
        'success'
      );
    }
  }

  showHistory() {
    const history = [...this.gameState.history].reverse();
    this.elements.historyContent.innerHTML = '';
    
    if (history.length === 0) {
      this.elements.historyContent.innerHTML = `
        <div style="text-align: center; color: #6b7280; padding: 2rem;">
          <p>Aún no has comenzado tu viaje de abundancia.</p>
          <p style="font-size: 0.875rem; margin-top: 0.5rem;">¡Lanza el dado para empezar!</p>
        </div>
      `;
    } else {
      history.forEach((entry, index) => {
        const colors = ['primary', 'secondary', 'accent', 'blue', 'purple', 'pink'];
        const color = colors[index % colors.length];
        
        const entryDiv = document.createElement('div');
        entryDiv.className = `history-entry ${color}`;
        entryDiv.innerHTML = `
          <div class="history-header">
            <div class="history-title">Día ${entry.day} • Casilla ${entry.position}</div>
            <div class="history-date">${this.formatDate(entry.playDate)}</div>
          </div>
          <div class="history-phrase">"${entry.phrase}"</div>
          <div class="history-dice">Dado: ${entry.diceRoll}</div>
        `;
        this.elements.historyContent.appendChild(entryDiv);
      });
    }
    
    this.elements.historyModal.classList.add('show');
  }

  hideHistory() {
    this.elements.historyModal.classList.remove('show');
  }

  showCompletion() {
    this.elements.completionModal.classList.add('show');
  }

  hideCompletion() {
    this.elements.completionModal.classList.remove('show');
  }

  startNewCycle() {
    this.resetGame();
    this.hideCompletion();
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  showToast(title, description, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-title">${title}</div>
      <div class="toast-description">${description}</div>
    `;
    
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