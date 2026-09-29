import { Theme } from './settings/types';
import { ExtraOpslagLanding } from './components/generated/ExtraOpslagLanding';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <ExtraOpslagLanding />;
}

export default App;