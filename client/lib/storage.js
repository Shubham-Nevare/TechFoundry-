// In-memory storage (replace with database in production)
let users = [{
    id: '1',
    username: 'admin',
    email: 'admin@freelanceteam.com',
    password: 'admin123', // <-- Add this line for testing only
    role: 'admin',
    createdAt: new Date()
}];

let projectRequests = [];
let messages = [];

export const getUsers = () => users;
export const getUserById = (id) => users.find(u => u.id === id);
export const getUserByUsername = (username) => users.find(u => u.username === username);

export const getProjectRequests = () => projectRequests;
export const getProjectRequestById = (id) => projectRequests.find(p => p.id === id);
export const addProjectRequest = (request) => {
    projectRequests.push(request);
};
export const updateProjectRequest = (id, updates) => {
    const index = projectRequests.findIndex(p => p.id === id);
    if (index !== -1) {
        projectRequests[index] = {...projectRequests[index], ...updates, updatedAt: new Date() };
        return projectRequests[index];
    }
    return undefined;
};

export const getMessages = () => messages;
export const getMessagesByProjectId = (projectId) =>
    messages.filter(m => m.projectRequestId === projectId);
export const addMessage = (message) => {
    messages.push(message);
};