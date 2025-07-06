'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Shield, LogOut, Mail, Phone, Calendar, DollarSign, MessageCircle, User, Eye } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [projectRequests, setProjectRequests] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchProjectRequests();
      fetchMessages();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        toast.success('Logged in successfully!');
        fetchProjectRequests();
        fetchMessages();
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setProjectRequests([]);
    setMessages([]);
  };

  const fetchProjectRequests = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/project-requests', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setProjectRequests(data);
      }
    } catch (error) {
      console.error('Error fetching project requests:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/messages', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const updateProjectStatus = async (projectId, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/project-requests/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast.success('Project status updated');
        fetchProjectRequests();
      }
    } catch (error) {
      toast.error('Failed to update project status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Project Requests</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projectRequests.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">
                    {projectRequests.filter(p => p.status === 'pending').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Approved</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {projectRequests.filter(p => p.status === 'approved').length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {projectRequests.filter(p => p.status === 'completed').length}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projectRequests.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {project.email}
                          </span>
                          {project.phone && (
                            <span className="flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              {project.phone}
                            </span>
                          )}
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(project.createdAt).toLocaleDateString()}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Select
                          value={project.status}
                          onValueChange={(status) => updateProjectStatus(project.id, status)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="reviewing">Reviewing</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Project Type</h4>
                        <p className="text-sm capitalize">{project.projectType}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Budget</h4>
                        <p className="text-sm">{project.budget}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Timeline</h4>
                        <p className="text-sm">{project.timeline}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Description</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>
                  All messages from the chat system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{message.senderName}</span>
                          <Badge variant="secondary" className="text-xs">
                            {message.senderRole}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {new Date(message.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {messages.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No messages yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}