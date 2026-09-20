// ============================================================
// CONFIGURAÇÃO DO SUPABASE - JÁ CONFIGURADO ✅
// ============================================================

const SUPABASE_CONFIG = {
  url: 'https://febyuuubrpltdkozuvxx.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlYnl1dXVicnBsdGRrb3p1dnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MjcxMzUsImV4cCI6MjEwNTUwMzEzNX0.LI-cu_3HANH20HKx8l-Tc5MfNBFBrGqOnNey5auj0lk'
};

const APP_CONFIG = {
  maxFotosPorRegistro: 5,
  maxFotoSizeMB: 5,
  bucketFotos: 'registros-fotos',

  empresa: 'Concessionária Belém Limpa',
  slogan: 'Trabalho e compromisso com a cidade',
  emailContato: 'TRABALHECONOSCO@BELEMLIMPA.COM.BR',

  cores: {
    verde: '#7CB342',
    verdeEscuro: '#558B2F',
    verdeClaro: '#AED581',
    azul: '#0091EA',
    azulEscuro: '#01579B'
  }
};

window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.APP_CONFIG = APP_CONFIG;