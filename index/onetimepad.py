import onetimepad

cipher = onetimepad.encrypt('Lets drink some coffee', 'thequickbrownfoxjumpsoveracrazydog')
print("Cipher text is ")
print(cipher)
print("Plain text is ")
msg = onetimepad.decrypt(cipher,'thequickbrownfoxjumpsoveracrazydog')

print(msg)
