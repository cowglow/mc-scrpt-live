<?php if (isset($input)) { ?>
    <pre><?= json_encode($input, JSON_PRETTY_PRINT); ?></pre>
<?php } ?>
<?= BrowserAutoloader(); ?>
</body>
</html>