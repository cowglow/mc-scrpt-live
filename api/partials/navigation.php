<div class="row">
    <div class="col-xs-12 col-md-12">
        <ul>
            <?php foreach ($headers as $key => $value) { ?>
                <li style="text-transform:uppercase;">
                    <a class="<?php if ($key === $view) { echo "active"; }; ?>" href="?tab=<?php echo $key; ?>"><?php echo $key; ?></a>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>
