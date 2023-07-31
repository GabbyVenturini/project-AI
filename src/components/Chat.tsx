'use client';

import { useChat } from 'ai/react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <Card className='w-[800px]'>
            <CardHeader>
                <CardTitle>Chat AI </CardTitle>
                <CardDescription>
                    Inteligência artificial desenvolvida por Guilherme.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <ScrollArea className='h-[600px] w-full pr-4'>
                    {messages.map((message) => {
                        return (
                            <div
                                key={message.id}
                                className='flex gap-3 text-slate-600 text-sm mb-4'
                            >
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>?</AvatarFallback>

                                        <AvatarImage src='https://avatars.githubusercontent.com/GuiRuchell' />
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>AI</AvatarFallback>

                                        <AvatarImage src='https://images.unsplash.com/photo-1593377201811-4516986cbe41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80' />
                                    </Avatar>
                                )}

                                <p className='leading-relaxed'>
                                    <span className='block font-bold text-slate-800'>
                                        {message.role === 'user' ? 'Usuário' : 'AI'}
                                    </span>

                                    {message.content}
                                </p>
                            </div>
                        );
                    })}
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className='flex flex-1 space-x-2' onSubmit={handleSubmit}>
                    <Input
                        placeholder='Como posso ajudar??'
                        value={input}
                        onChange={handleInputChange}
                    />

                    <Button type='submit'>Enviar</Button>
                </form>
            </CardFooter>
        </Card>
    );
};