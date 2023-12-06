<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class Button
{
    public string $variant = 'default';

    public function variantClasses(): string
    {
        return match ($this->variant) {
            'default' => 'text-white bg-blue-500 hover:bg-blue-700',
            'success' => 'text-white bg-green-600 hover:bg-green-700',
            'danger' => 'text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none',
            'link' => 'text-white',
            default => throw new \LogicException(sprintf('Unknown button type "%s"', $this->variant)),
        };
    }
}
