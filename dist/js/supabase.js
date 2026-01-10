
// IMPORTANTE: Substitua 'SEU_SUPABASE_URL' e 'SUA_SUPABASE_ANON_KEY' pelos seus valores reais.
const supabaseUrl = 'https://mbspfgvptdhnrnwhwpho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ic3BmZ3ZwdGRobnJud2h3cGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2MjIxMTYsImV4cCI6MjA4MTE5ODExNn0.S2WWNBKSODQtZkT84BHZNMwVmfgIFpWdWo7Ds1BzE78';

//cliente Supabase
const _supabase = supabase.createClient(APP_CONFIG.SUPABASE_URL,  APP_CONFIG.SUPABASE_KEY);

//buscar e exibir os usuários
async function getUsers() {
    const userList = document.getElementById('user-list');

    //todos os dados da tabela usuarios
    const { data: users, error } = await _supabase
        .from('usuarios')
        .select('*');

    if (error) {
        console.error('Erro ao buscar usuários:', error);
        userList.innerHTML = '<li>Ocorreu um erro ao buscar os dados. Verifique o console.</li>';
        return;
    }

    if (users && users.length > 0) {
        //limpa a lista antes de adicionar novos itens
        userList.innerHTML = '';
        //adiciona cada usuário como um item da lista
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `ID: ${user.id}, Nome: ${user.name}, Email: ${user.email}, Valor Aleatorio: ${user.randomValue}`;
            userList.appendChild(listItem);
        });
    } else {
        //mensagem se nenhum usuário for encontrado
        userList.innerHTML = '<li>Nenhum usuário encontrado.</li>';
        console.warn('A busca não retornou usuários. Verifique se a tabela "usuarios" não está vazia. Se a segurança de nível de linha (RLS) estiver ativa, você precisa estar autenticado para ver os dados.');
    }
}

// 4. Chame a função para executar quando a página carregar
getUsers();